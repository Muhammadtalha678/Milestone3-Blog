import {blogData} from '@/app/api/blog/route'
export async function GET({ params }: { params: Promise<{ id: string }> }) {
    const id = (await params).id // 'a', 'b', or 'c'
    const singleBlog = blogData.find((e) => e.id == parseInt(id))
    if (singleBlog) {
        return Response.json({
            singleBlog
        })
        
    }
    else {
        return Response.json({
            msg:"Blog Not Found"
        })
    }
}