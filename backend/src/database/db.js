export const comandas = [
    // numero, mesa, pedido (produtos), total (calculado pelo backend)
];

export const produtos = [
    // =========================
    // BEBIDAS
    // =========================
    { id: 1, nome: "Café expresso", categoria: "Bebidas", preco: 5.00, quantidade: 120, unidade: "unidade", disponivel: true },
    { id: 6, nome: "Suco de laranja natural", categoria: "Bebidas", preco: 9.00, quantidade: 72, unidade: "unidade", disponivel: true },

    // =========================
    // CAFETERIA
    // =========================
    { id: 11, nome: "Pão de queijo pequeno", categoria: "Cafeteria", preco: 3.50, quantidade: 180, unidade: "unidade", disponivel: true },
    { id: 13, nome: "Croissant de queijo", categoria: "Cafeteria", preco: 9.00, quantidade: 42, unidade: "unidade", disponivel: true },

    // =========================
    // SALGADOS
    // =========================
    { id: 18, nome: "Coxinha de frango", categoria: "Salgados", preco: 8.00, quantidade: 110, unidade: "unidade", disponivel: true },
    { id: 22, nome: "Esfiha de carne", categoria: "Salgados", preco: 8.50, quantidade: 65, unidade: "unidade", disponivel: true },

    // =========================
    // SANDUÍCHES
    // =========================
    { id: 29, nome: "Sanduíche natural de frango", categoria: "Sanduíches", preco: 14.00, quantidade: 35, unidade: "unidade", disponivel: true },
    { id: 33, nome: "Hambúrguer artesanal", categoria: "Sanduíches", preco: 22.00, quantidade: 25, unidade: "unidade", disponivel: true },

    // =========================
    // BOLOS & FATIAS
    // =========================
    { id: 35, nome: "Bolo de chocolate", categoria: "Bolos", preco: 45.00, quantidade: 12, unidade: "unidade", disponivel: true },
    { id: 42, nome: "Fatia de bolo de chocolate", categoria: "Fatias", preco: 10.00, quantidade: 45, unidade: "unidade", disponivel: true },

    // =========================
    // DOCES & TORTAS
    // =========================
    { id: 46, nome: "Brigadeiro", categoria: "Doces", preco: 4.00, quantidade: 150, unidade: "unidade", disponivel: true },
    { id: 53, nome: "Torta de limão", categoria: "Tortas", preco: 55.00, quantidade: 9, unidade: "unidade", disponivel: true },

    // =========================
    // PÃES & CONFEITARIA
    // =========================
    { id: 57, nome: "Pão francês", categoria: "Pães", preco: 1.20, quantidade: 500, unidade: "unidade", disponivel: true },
    { id: 62, nome: "Sonho de creme", categoria: "Confeitaria", preco: 8.00, quantidade: 35, unidade: "unidade", disponivel: true },

    // =========================
    // PRODUTOS SEM ESTOQUE
    // =========================
    { id: 68, nome: "Bolo de aniversário", categoria: "Encomendas", preco: 120.00, quantidade: 0, unidade: "unidade", disponivel: false },
    { id: 70, nome: "Café gelado", categoria: "Bebidas", preco: 12.00, quantidade: 0, unidade: "unidade", disponivel: false }
];

export const contas = [
    {
        id: 1,
        usuario: "admin",
        email: "padaria@trigos.com",
        senha: "$2b$10$5/5VI9jZLIWm10krjqk34ut6MRn6T.UG1/rM6QXrtSENOUJ/nEJkO"
    }
]