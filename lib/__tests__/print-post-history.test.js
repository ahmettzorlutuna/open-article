const printAllPosts = require('../print-post-history')

test("print users posts", () => {
    const user = {
        username: "Ahmet",
        posts:[{
            name: 'Deneme post',
            content: 'Deneme içerik',
            likes: 10,
            dislikes: 5
        }],
    };
    
    const consoleSpy = jest.spyOn(console, 'log')
    
    printAllPosts(user)
    
    expect(consoleSpy).toHaveBeenCalledWith("Ahmet's post is Deneme içerik")
    
    consoleSpy.mockRestore()
})