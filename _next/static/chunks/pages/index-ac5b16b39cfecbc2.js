(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [405],
    {
        5557: function (e, t, i) {
            (window.__NEXT_P = window.__NEXT_P || []).push([
                "/",
                function () {
                    return i(6062);
                },
            ]);
        },
        3193: function (e, t, i) {
            "use strict";
            i.d(t, {
                $: function () {
                    return o;
                },
                r: function () {
                    return a;
                },
            });
            var n = i(5893),
                s = (i(7294), i(1664)),
                r = i.n(s),
                a = function (e) {
                    var t = e.title,
                        i = e.description,
                        s = e.buttons;
                    return (0, n.jsx)("div", {
                        id: "contact",
                        className: "bg-white py-5 px-5",
                        children: (0, n.jsxs)("div", {
                            className: "container",
                            children: [
                                (0, n.jsx)("h1", { className: "text-primary fw-bold", children: t }),
                                (0, n.jsxs)("div", {
                                    className: "px-sm-5",
                                    children: [
                                        (0, n.jsx)("p", { children: i }),
                                        (0, n.jsx)("div", {
                                            className: "",
                                            children: s.map(function (e, t) {
                                                return e.isPrimary
                                                    ? (0, n.jsx)(r(), { href: e.link, children: (0, n.jsx)("a", { className: "btn btn-primary my-1 mx-3", children: e.title }) }, t)
                                                    : (0, n.jsx)(r(), { href: e.link, children: (0, n.jsx)("a", { className: "btn btn-outline-primary my-1 mx-3", children: e.title }) }, t);
                                            }),
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    });
                },
                o = function () {
                    return (0, n.jsx)("footer", {
                        className: "bg-secondary text-center py-2 px-5",
                        children: (0, n.jsx)("div", {
                            className: "container text-muted",
                            children: (0, n.jsxs)("small", {
                                children: [
                                    "\xa9 2024 ",
                                    " ",
                                    (0, n.jsx)(r(), { href: "https://github.com/azerothlegends", children: (0, n.jsx)("a", { children: "AzerothLegends" }) }),
                                    ". Código aberto sob a ",
                                    " ",
                                    (0, n.jsx)(r(), { href: "https://github.com/AzerothLegends/AzerothForge/blob/main/LICENSE.txt", children: (0, n.jsx)("a", { children: "MIT License" }) }),
                                    " | ",
                                    "",
                                    (0, n.jsx)(r(), { href: "https://github.com/hashirshoaeb", children: (0, n.jsx)("a", { children: "Criador do Template: @hashirshoaeb" }) }),
                                    " ",
                                    "",
                                ],
                            }),
                        }),
                    });
                };
        },
        7673: function (e, t, i) {
            "use strict";
            i.d(t, {
                h: function () {
                    return a;
                },
            });
            var n = i(5893),
                s = i(9008),
                r = i.n(s),
                a = function (e) {
                    var t = e.seo;
                    return (0, n.jsxs)(r(), {
                        children: [
                            (0, n.jsx)("title", { children: t.title }),
                            (0, n.jsx)("meta", { name: "description", content: t.description }),
                            (0, n.jsx)("meta", { property: "og:title", content: t.title }),
                            (0, n.jsx)("meta", { property: "og:description", content: t.description }),
                            (0, n.jsx)("meta", { property: "og:image", content: t.image }),
                            (0, n.jsx)("meta", { property: "og:type", content: "website" }),
                        ],
                    });
                };
        },
        4067: function (e, t, i) {
            "use strict";
            i.d(t, {
                HJ: function () {
                    return h;
                },
                jZ: function () {
                    return o;
                },
                PX: function () {
                    return d;
                },
                mf: function () {
                    return a;
                },
                Ok: function () {
                    return p;
                },
                G: function () {
                    return r;
                },
                q: function () {
                    return c;
                },
                ZT: function () {
                    return l;
                },
            });
            var n = "/_next/static/media/profile.82b751c8.jpeg",
                s = i(3024),
                r = {
                    name: "AzerothLegends",
                    links: [
                        { title: "Sobre", link: "#about" },
                        { title: "Projetos", link: "#projects" },
                        { title: "Contato", link: "#contact" },
                        { title: "Links", link: "/links" },
                        
                    ],
                },
                a = {
                    title: "AzerothLegends",
                    description: "Projeto brasileiro de desenvolvimento de conteúdo para private servers de world of warcraft",
                    image: n,
                    buttons: [
                        //{ title: "Contact Me", link: "#contact", isPrimary: !0 },
                        //{ title: "Resume", link: "", isPrimary: !1 },
                    ],
                },
                o = {
                    title: "Quem somos",
                    description: [
                        "AzerothLegends é uma iniciativa brasileira voltada ao desenvolvimento de conteúdos e soluções específicas para servidores privados de World of Warcraft.",
                        "Essa iniciativa sem fins lucrativos foi criada sem  com a intenção de expandir os horizontes da comunidade brasileira voltada a private servers de world of warcraft",
                        "Nosso foco está na criação e adaptação de sistemas, scripts e ferramentas que ampliem as funcionalidades do jogo, sempre buscando otimizar a performance e atender às demandas técnicas dos membros da comunidade de private servers de world of warcraft.",
                    ],
                },
                l = {
                    title: "O que fazemos",
                    cards: [
                        { title: "Tradução de Módulos", description: "Traduzimos módulos do azerothcore para a comunidade brasileira.", icons: null },
                        { title: "Criamos Ferramentas", description: "Trabalhamos em ferramentas para um melhor desempenho em administração de servidores", icons: null },
                        { title: "Criamos Scripts para Eluna", description: "Trabalhamos no desenvolvimento e atualização de scripts de codigo aberto", icons: null },
                    ],
                },
                c = {
                    title: "Projetos",
                    cards: [
                        {
                            title: "AzerothForge App",
                            description: "Um aplicativo editor de Banco de Dados multiplataforma em desenvolvimento para o azerothcore",
                            icons: [
                                //{ icon: s.OF7, link: "" },
                                { icon: s.zhw, link: "https://github.com/AzerothLegends/AzerothForge" },
                            ],
                        },

                    ],
                },
                d = {
                    title: "",
                    description: "",
                    buttons: [
                       //{ title: "Email Me", link: "mailto:valberlimabr@gmail.com", isPrimary: !0 },
                       //{ title: "Schedule Meeting", link: "", isPrimary: !1 },
                    ],
                },
                h = {
                    title: "AzerothLegends | Projeto brasileiro de desenvolvimento para private servers",
                    description: "I create mobile apps and static websites. I graduated from National University of Sciences and Technology (NUST) in 2020 with a degree in Computer Engineering.",
                    image: n,
                },
                p = {
                    image: n,
                    title: "@AzerothLegends",
                    description: "Comunidade de Desenvolvimento para Private Servers de WoW",
                    cards: [
                        { title: "Nosso Site", link: "https://azerothlegends.github.io" },
                        { title: "Discord (Em Breve)", link: "https://azerothlegends.github.io" },
                        { title: "Nosso Github", link: "https://github.com/AzerothLegends" },
                    ],
                };
        },
        6062: function (e, t, i) {
            "use strict";
            i.r(t),
                i.d(t, {
                    default: function () {
                        return b;
                    },
                });
            var n = i(5893),
                s = i(7294),
                r = i(1664),
                a = i.n(r),
                o = function (e) {
                    var t = e.title,
                        i = e.links,
                        r = (0, s.useState)(!0),
                        o = r[0],
                        l = r[1];
                    return (0, n.jsx)("nav", {
                        className: "navbar navbar-expand-sm navbar-light bg-secondary",
                        children: (0, n.jsxs)("div", {
                            className: "container",
                            children: [
                                (0, n.jsx)(a(), { href: "/", children: (0, n.jsx)("a", { className: "navbar-brand", children: (0, n.jsx)("span", { className: "", children: t }) }) }),
                                (0, n.jsx)("button", {
                                    className: "custom-toggler navbar-toggler",
                                    type: "button",
                                    "data-toggle": "collapse",
                                    "data-target": "#navbarsExample09",
                                    "aria-controls": "navbarsExample09",
                                    "aria-expanded": !o,
                                    "aria-label": "Toggle navigation",
                                    onClick: function () {
                                        return l(!o);
                                    },
                                    children: (0, n.jsx)("span", { className: "navbar-toggler-icon" }),
                                }),
                                (0, n.jsx)("div", {
                                    className: "".concat(o ? "collapse" : "", " navbar-collapse"),
                                    id: "navbarsExample09",
                                    children: (0, n.jsx)("div", {
                                        className: "navbar-nav",
                                        children: i.map(function (e, t) {
                                            return (0, n.jsx)(a(), { href: e.link, children: (0, n.jsx)("a", { className: "nav-link", children: e.title }) }, t);
                                        }),
                                    }),
                                }),
                            ],
                        }),
                    });
                },
                l = i(1752),
                c =
                    (i.n(l)()().publicRuntimeConfig,
                    function (e) {
                        var t = e.title,
                            i = e.description,
                            s = e.image,
                            r = e.buttons;
                        return (0, n.jsx)("div", {
                            className: "bg-secondary py-5 px-5",
                            children: (0, n.jsx)("div", {
                                className: "container",
                                children: (0, n.jsxs)("div", {
                                    className: " row align-items-center",
                                    children: [
                                        (0, n.jsxs)("div", {
                                            className: "col-sm-6",
                                            children: [
                                                (0, n.jsx)("h1", { className: "text-primary fw-bold display-3", children: t }),
                                                (0, n.jsx)("p", { children: i }),
                                                (0, n.jsx)("div", {
                                                    className: "text-center",
                                                    children: r.map(function (e, t) {
                                                        return e.isPrimary
                                                            ? (0, n.jsx)(a(), { href: e.link, children: (0, n.jsx)("a", { className: "btn btn-primary my-1 mx-3", children: e.title }) }, t)
                                                            : (0, n.jsx)(a(), { href: e.link, children: (0, n.jsx)("a", { target: "_blank", rel: "noreferrer", className: "btn btn-outline-primary my-1 mx-3", children: e.title }) }, t);
                                                    }),
                                                }),
                                            ],
                                        }),
                                        (0, n.jsx)("div", { className: "col-sm-6 text-center", children: (0, n.jsx)("img", { className: "img-fluid my-3 card-image", width: "250", height: "250", src: s, alt: "profile of hashirshoaeb" }) }),
                                    ],
                                }),
                            }),
                        });
                    }),
                d = function (e) {
                    var t = e.title,
                        i = e.description;
                    return (0, n.jsx)("div", {
                        id: "about",
                        className: "bg-white py-5 px-5",
                        children: (0, n.jsxs)("div", {
                            className: "container",
                            children: [
                                (0, n.jsx)("h1", { className: "text-primary fw-bold", children: t }),
                                (0, n.jsx)("div", {
                                    className: "px-sm-5",
                                    children: i.map(function (e, t) {
                                        return (0, n.jsx)("p", { children: e }, t);
                                    }),
                                }),
                            ],
                        }),
                    });
                },
                h = i(9603),
                p = function (e) {
                    var t = e.title,
                        i = e.cards;
                    return (0, n.jsx)("div", {
                        id: "skills",
                        className: "bg-secondary py-5 px-5",
                        children: (0, n.jsxs)("div", {
                            className: "container",
                            children: [
                                (0, n.jsx)("h1", { className: "text-primary fw-bold", children: t }),
                                (0, n.jsx)("div", {
                                    className: "d-flex flex-row flex-wrap justify-content-center",
                                    children: i.map(function (e, t) {
                                        return (0, n.jsx)(u, { title: e.title, description: e.description, link: e.link }, t);
                                    }),
                                }),
                            ],
                        }),
                    });
                },
                m = function (e) {
                    e.title;
                    var t = e.cards;
                    return (0, n.jsx)("div", {
                        id: "projects",
                        className: "bg-primary py-5 px-5",
                        children: (0, n.jsxs)("div", {
                            className: "container",
                            children: [
                                (0, n.jsx)("h1", { className: "text-light fw-bold", children: "Projetos" }),
                                (0, n.jsx)("div", {
                                    className: "d-flex flex-row flex-wrap justify-content-center",
                                    children: t.map(function (e, t) {
                                        return (0, n.jsx)(u, { title: e.title, description: e.description, icons: e.icons }, t);
                                    }),
                                }),
                            ],
                        }),
                    });
                },
                u = function (e) {
                    var t = e.title,
                        i = e.description,
                        s = e.icons;
                    return (0, n.jsxs)("div", {
                        className: "card py-3 px-3 mx-sm-4 my-4 card-work",
                        style: { width: "20rem" },
                        children: [
                            (0, n.jsx)("h4", { className: "text-primary", children: t }),
                            (0, n.jsx)("p", { className: "text-dark", children: i }),
                            (0, n.jsx)("div", {
                                className: "text-end",
                                children:
                                    s &&
                                    s.map(function (e, t) {
                                        return (0, n.jsx)(a(), { href: e.link, children: (0, n.jsx)("a", { target: "_blank", rel: "noreferrer", children: (0, n.jsx)(h.G, { className: "icon-style mx-1", icon: e.icon, size: "2x" }) }) }, t);
                                    }),
                            }),
                        ],
                    });
                },
                x = i(3193),
                g = i(4067),
                f = i(7673);
            function b() {
                return (0, n.jsxs)(s.Fragment, {
                    children: [
                        (0, n.jsx)(f.h, { seo: g.HJ }),
                        (0, n.jsx)(o, { title: g.G.name, links: g.G.links }),
                        (0, n.jsx)(c, { title: g.mf.title, description: g.mf.description, image: g.mf.image, buttons: g.mf.buttons }),
                        (0, n.jsx)(d, { title: g.jZ.title, description: g.jZ.description }),
                        (0, n.jsx)(p, { title: g.ZT.title, cards: g.ZT.cards }),
                        (0, n.jsx)(m, { title: g.q.title, cards: g.q.cards }),
                        (0, n.jsx)(x.r, { title: g.PX.title, description: g.PX.description, buttons: g.PX.buttons }),
                        (0, n.jsx)(x.$, {}),
                    ],
                });
            }
        },
    },
    function (e) {
        e.O(0, [948, 574, 603, 774, 888, 179], function () {
            return (t = 5557), e((e.s = t));
            var t;
        });
        var t = e.O();
        _N_E = t;
    },
]);
