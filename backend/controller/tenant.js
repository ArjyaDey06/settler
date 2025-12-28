import TenantProfile from "../model/TenantProfile.js";

export const createOrUpdateTenant = async (req, res) => {
    try {
        const userId = req.user.mongoId; // set in auth middleware

        const tenant = await TenantProfile.findOneAndUpdate(
            { userId },
            { ...req.body },
            { new: true, upsert: true }
        );

        res.status(200).json(tenant);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
