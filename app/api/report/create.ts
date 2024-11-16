import type { NextApiRequest, NextApiResponse } from 'next';
import { Fraudster } from '@/models/FraudEntity';
import { Report } from "@/models/Report";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
   
    if (req.method === 'POST') {
        const { fraudsterEntityId, userId, eventDetails, publicImpact, tags, actionsTaken, status } = req.body;

        try {
            const fraudster = await Fraudster.findById(fraudsterEntityId);
            if (!fraudster) {
                return res.status(404).json({ error: 'Fraudster not found' });
            }

            const report = new Report({
                fraudsterEntityId,
                userId,
                eventDetails,
                publicImpact,
                tags,
                actionsTaken,
                status,
            });
            await report.save();

            fraudster.fraudsterDetails.reportedCount += 1;
            await fraudster.save();

            return res.status(201).json(report);
        } catch (error) {
            if (error instanceof Error) {
                return res.status(500).json({ error: error.message });
            } else {
                return res.status(500).json({ error: 'An unknown error occurred' });
            }
        }
    } else {
        return res.status(405).json({ error: 'Method not allowed' });
    }
}
