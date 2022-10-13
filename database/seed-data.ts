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
            description: "pending lorem ipsum jflajfla",
            status:'pending',
            createdAt: Date.now(),
        },
        {
            description: "in-progress lorem ipsum 5878",
            status:'in-progress',
            createdAt: Date.now()-1000000,
        },
        {
            description: "finished lorem ipsum 1323",
            status:'finished',
            createdAt: Date.now()-1000,
        }
    ]
}