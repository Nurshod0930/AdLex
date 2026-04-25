import { Router, Response } from 'express';
import { AuthRequest, authenticateToken } from '../middleware/auth';
import { PrismaClient } from '@prisma/client';

const router = Router();
const prisma = new PrismaClient();

// Get all organizations
router.get('/', async (req: AuthRequest, res: Response) => {
  try {
    const organizations = await prisma.organization.findMany({
      include: { _count: { select: { employees: true } } },
    });
    res.json(organizations);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch organizations' });
  }
});

// Get organization by ID
router.get('/:id', async (req: AuthRequest, res: Response) => {
  try {
    const organization = await prisma.organization.findUnique({
      where: { id: req.params.id },
      include: { employees: true },
    });

    if (!organization) {
      return res.status(404).json({ error: 'Organization not found' });
    }

    res.json(organization);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch organization' });
  }
});

// Get employees by organization
router.get('/:id/employees', async (req: AuthRequest, res: Response) => {
  try {
    const employees = await prisma.employee.findMany({
      where: { organizationId: req.params.id },
    });
    res.json(employees);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch employees' });
  }
});

// Search organizations
router.get('/search', async (req: AuthRequest, res: Response) => {
  try {
    const { query, sector, region } = req.query;

    const organizations = await prisma.organization.findMany({
      where: {
        AND: [
          query ? {
            OR: [
              { name: { contains: query as string, mode: 'insensitive' } },
              { description: { contains: query as string, mode: 'insensitive' } },
            ],
          } : {},
          sector ? { sector: sector as string } : {},
          region ? { region: region as string } : {},
        ],
      },
    });

    res.json(organizations);
  } catch (error) {
    res.status(500).json({ error: 'Search failed' });
  }
});

export default router;
