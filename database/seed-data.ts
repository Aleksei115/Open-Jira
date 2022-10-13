interface SeedData {
    entries: seedEntry[]
    //Todo users
}


interface seedEntry {
    description: string,
    status: string,
    createdAt: number,
}

export const seedData: SeedData = {
    entries: [
        {
            description: "I need to make my CV",
            status:'pending',
            createdAt: Date.now(),
        },
        {
            description: "NextJS course",
            status:'in-progress',
            createdAt: Date.now(),
        },
        {
            description: "Homework of my school",
            status:'finished',
            createdAt: Date.now(),
        }
    ]
}