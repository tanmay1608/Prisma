import { PrismaClient } from "@prisma/client"
import {post1, post2,post3, user1 as user } from "./seedData.js"

const prisma =new PrismaClient()
async function main(){
    const user1=await prisma.user.upsert({
        where:{id:user.id},
        update:{},
        create:{
            ...user
        }
    })

    const p1=await prisma.post.upsert({
        where:{id:post1.id},
        update:{},
        create:{
            ...post1
        }
    })

    const p2=await prisma.post.upsert({
        where:{id:post2.id},
        update:{},
        create:{
            ...post2
        }
    })

    const p3=await prisma.post.upsert({
        where:{id:post3.id},
        update:{},
        create:{
            ...post3
        }
    })

    
}

main()
.then(()=>{
    prisma.$disconnect()
})
.catch(()=>{
    console.log("something wen twrong")
    prisma,$disconnect()
})