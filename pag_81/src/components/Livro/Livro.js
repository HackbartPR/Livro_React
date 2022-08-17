import * as C from "./style";

export const Livro = (props) => {
  console.log(props.id)
  return (
    <C.Catalogo>
      <div className="wrapper">
        <h2 className="title">Últimos Lançamentos</h2>
        <div className="card">
          <div className="content">
            <img src={"/assets/imagens/capas/9788575221396.jpg"} alt="Capa do Livro" />
            <div className="content__author">
              <p className="content__author__name">Autor: Mauricio Samy Silva</p>
              <p className="content__author__isbn">ISBN: XXX-XXX-XXX-X</p>
              <p className="content__author__year">Ano: 2015</p>
              <p className="content__author__pags">Páginas: 304</p>
              <p className="content__author__price">Preço impressso: R$ 69,00</p>
            </div>
          </div>

          <div className="description">
            <h3>Descrição do Livro</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi eleifend, purus quis laoreet faucibus, ante augue malesuada mi, id
              rhoncus augue lorem eget elit. Ut sollicitudin sodales purus. Phasellus libero felis, blandit nec, commodo ut, imperdiet ut, nibh.
              Suspendisse potenti.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi eleifend, purus quis laoreet faucibus, ante augue malesuada mi, id
              rhoncus augue lorem eget elit.
            </p>
          </div>
        </div>
      </div>
    </C.Catalogo>
  );
};
