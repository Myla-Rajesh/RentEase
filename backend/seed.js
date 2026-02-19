const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bcrypt = require('bcryptjs');
const userSchema = require('./schemas/userModel');
const propertySchema = require('./schemas/propertyModel');

dotenv.config();

const seedData = async () => {
    try {
        await mongoose.connect(process.env.MONGO_DB, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connected to MongoDB');

        // Check if a dummy owner already exists
        let owner = await userSchema.findOne({ email: 'owner@example.com' });
        
        if (!owner) {
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash('password123', salt);
            
            owner = new userSchema({
                name: 'Test Owner',
                email: 'owner@example.com',
                password: hashedPassword,
                type: 'Owner',
                granted: 'granted' // Ensure they are granted permission to post
            });
            await owner.save();
            console.log('Created dummy owner: owner@example.com / password123');
        } else {
            console.log('Using existing dummy owner');
        }

        const images = [
            'p2.jpg',
            'pexels-binyaminmellish-106399.jpg',
            'todd-kent-178j8tJrNlc-unsplash.jpg'
        ];

        const propertyTypes = ['Residential', 'Commercial', 'land/Plot'];
        const adTypes = ['Rent', 'Sale'];
        const addresses = ['123 Main St, Cityville', '456 Oak Ave, Townburg', '789 Pine Ln, Villageton'];

        const properties = [];

        for (let i = 0; i < 3; i++) {
            const prop = {
                ownerId: owner._id,
                propertyType: propertyTypes[i % propertyTypes.length],
                propertyAdType: adTypes[i % adTypes.length],
                propertyAddress: addresses[i],
                ownerContact: 1234567890,
                propertyAmt: 15000 + (i * 5000),
                propertyImage: [{ path: `/uploads/${images[i % images.length]}` }],
                additionalInfo: 'This is a lovely property with great amenities.',
                ownerName: owner.name,
                isAvailable: 'Available'
            };
            properties.push(prop);
        }

        await propertySchema.insertMany(properties);
        console.log(`Seeded ${properties.length} properties`);

        mongoose.disconnect();
        console.log('Disconnected');
    } catch (error) {
        console.error('Error seeding data:', error);
        process.exit(1);
    }
};

seedData();
