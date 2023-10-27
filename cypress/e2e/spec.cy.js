describe("template spec", () => {
  it("api", () => {
    const apis = [
      {
        name: "posts",
        url: "https://jsonplaceholder.typicode.com/posts",
      },
      {
        name: "albums",
        url: "https://jsonplaceholder.typicode.com/albums",
      },
      {
        name: "comments",
        url: "https://jsonplaceholder.typicode.com/comments",
      },
      {
        name: "photos",
        url: "https://jsonplaceholder.typicode.com/photos",
      },
    ];
    apis.map(({ name, url }) => {
      cy.request({
        url: url,
        method: "GET",
      }).as(name);
    });
    cy.wait(["@posts", "@albums", "@comments", "@photos"]).then((res) => {
      console.log(res);
    });
  });
});
