export const blogData = [
    {
        id: 1,
        title: "The Beauty of Sustainable Living",
        description: "Discover how sustainable living can transform your life and the planet. Learn practical tips and insights to start your eco-friendly journey today.",
        author: "Jane Doe",
        image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
        publishDate: "2024-12-20"
    },
    {
        id: 2,
        title: "Mastering the Art of Productivity",
        description: "Explore strategies and tools that can help you maximize your productivity and achieve your goals with efficiency.",
        author: "John Smith",
        image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
        publishDate: "2024-12-18"
    },
    {
        id: 3,
        title: "The Future of Technology: Trends to Watch",
        description: "An in-depth analysis of emerging technologies shaping our future, from AI advancements to quantum computing.",
        author: "Emily Johnson",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
        publishDate: "2024-12-15"
    },
    {
        id: 4,
        title: "Culinary Adventures: Recipes from Around the World",
        description: "Take your taste buds on a global tour with these curated recipes inspired by diverse cuisines.",
        author: "Michael Brown",
        image: "https://images.unsplash.com/photo-1499028344343-cd173ffc68a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
        publishDate: "2024-12-10"
    },
    {
        id: 5,
        title: "Mindfulness for Modern Life",
        description: "Learn how to incorporate mindfulness into your daily routine to reduce stress and improve well-being.",
        author: "Sarah Lee",
        image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
        publishDate: "2024-12-05"
    }
];



export async function GET() {
    return Response.json({
        blogData,
    })
}
