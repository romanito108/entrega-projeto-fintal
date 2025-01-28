const mockFetchItems = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: 1,
          title: "Produto A",
          description: "Descrição do Produto A",
          price: 100,
          pictureUrl: "/img/image1.jpg",
          categoryId: 1, 
        },
        {
          id: 2,
          title: "Produto B",
          description: "Descrição do Produto B",
          price: 150,
          pictureUrl: "/img/image2.jpg",
          categoryId: 2, 
        },
      ]);
    }, 2000);
  });
};

export default mockFetchItems;
