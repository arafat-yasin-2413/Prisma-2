import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
// const prisma = new prismaClient({ log: ["query"]})



async function main(){

    // const user = await prisma.user.create({data:{name: "Sally"}})
    // console.log(user)

    // const users = await prisma.user.findMany()
    // console.log(users)

    // await prisma.user.deleteMany()
    // const user = await prisma.user.create({
    //     data:{
    //        name: "Kyle",
    //        email: "kyle@test.com",
    //        age: 27, 
    //        userPreference: {
    //         create: {
    //             emailUpdates: true,
    //         },
    //        },
    //     },
    //     select: {
    //         name : true,
    //         userPreference: {select: {id: true}}
    //     }
    // })

    // await prisma.user.deleteMany()
    // const users = await prisma.user.createMany({
    //     data: [
    //         {
    //             name: "Kyle",
    //             email: "kyle@test.com",
    //             age: 27,
    //         },
    //         {
    //             name: "Sally",
    //             email: "sally@test.com",
    //             age: 32,
    //         },
    //     ],
    // })
    // console.log(users)

    // const user = await prisma.user.findUnique({
    //     where: {
    //         // email:"kyle@test.com",
    //         age_name:{
    //             age: 24,
    //             name: "Kyle",
    //         }
    //     }
    // })

    // findFirst
    // const user = await prisma.user.findMany({
    //     where: {
    //         name: "Sally",
    //     },
        // orderBy:{
        //     age: "desc",
        // },
        // take: 2,
        // skip: 1,
    // })

    // await prisma.user.createMany({
    //     data: [
    //         {
    //             name: "Sally",
    //             age: 15,
    //             email: "sally@test15.com",
    //         },
            
    //     ],
    // })

    // const user = await prisma.user.findMany({
    //     where: {
    //         name: {equals: "Sally"},
            // name: {not: "Sally"},
            // name: {in: ["Sally", "Kyle"]},
            // name: {notIn: ["Sally", "Kyle"]},
            
            // name: "Kyle",
            // age: {gt: 20},

            // email: {contains: "@test.com"},
            // email: {endsWith: "@test1.com"},
            // email: {startsWith: "kyle"},
            // name: "Sally",

            // AND : [{
            //     email: {startsWith: "sally"}
            // }, {name: "Sally"}],

            // userPreference : {
            //     emailUpdates : false,
            // },

    //         writtenPosts:{
    //             some: {
    //                 title: "Test",
    //             },
    //         },
    //     },
    // })

    // console.log(user)
    // console.log(user.length)



    // const user = await prisma.user.update({
    //     where: {
    //         email: "sally@test3.com",
    //     },
    //     data: {
    //         email: "sally@test3333.com",
    //     },
    // })

    // console.log(user)

    // const users = await prisma.user.findMany({
    //     where: {
    //         name: {
    //             startsWith: "New",
    //         },
    //     },
    // })

    // console.log(users)

    // const user = await prisma.user.update({
    //     where: {
    //         email: "sally@test2.com",
    //     },
    //     data: {
    //         email: "sally@test222.com",
    //     },
    // })




    // const user = await prisma.user.updateMany({
    //     where: {
    //         name: "Kyle",
    //     },
    //     data: {
    //         name: "New Kyle",
    //     },
    // })

    // console.log(user)



    // const preference = await prisma.userPreference.create({
    //     data: {
    //         emailUpdates: true,
    //     },
    // })

    // console.log(preference)




    // const user = await prisma.user.update({
    //     where:{
    //         email: "kyle@test.com",
    //     },
    //     data: {
    //         userPreference: {
    //             connect: {
    //                 id : "adcf5347-d655-49b1-a7f8-8d63e3a46c56",
    //             },
    //         },
    //     },
    // })


    // const user = await prisma.user.findFirst({
    //     where: {
    //         name: "Kyle",
    //     },
    //     include: {
    //         userPreference: true,
    //     },
    // })

    // const user = await prisma.user.update({
    //     where: {
    //         email: "kyle@test.com",
    //     },
    //     data:{
    //         userPreference: {
    //             disconnect: true,
    //         },
    //     },
    // })

    // console.log(user)



    const users = await prisma.user.findMany({
        where:{
            age: {
                gt: 10,
            },
        },
        
    })

    console.log(users)
}

main()
    .catch (e => {
        console.error(e.message)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })