import Application from "../model/application.model.js";
import { catchError ,AppError } from "../../../utils/error.handler.js";


// Your existing import statements

export const ApplyJob = catchError(async (req, res) => {
    try {
        const { jobId, userId, userTechSkills, userSoftSkills } = req.body;
        const cvFile = req.file.path; // Assuming Cloudinary stores the file path

        // Save the application to the database using the Application model

        // Example:
        const newApplication = new Application({
            jobId,
            userId,
            userTechSkills,
            userSoftSkills,
            userResume: cvFile, // Save the file path
        });

        await newApplication.save();

        return res.status(201).json({ message: 'Application submitted successfully' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
})


