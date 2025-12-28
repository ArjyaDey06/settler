import User from "../model/User.js";

export const loginUser = async (req, res) => {
    try {
        const { uid, name, email, profilePic } = req.user;
        // req.user comes from Firebase middleware

        let user = await User.findOne({ firebaseUid: uid });

        if (!user) {
            user = await User.create({
                firebaseUid: uid,
                name,
                email,
                profilePic,
                verification: {
                    googleVerified: true
                }
            });
        }

        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
