import React from 'react';
import "/Users/ornel/mi-proyecto-react/src/components/Principal/Categorias.css";

class Categories extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [
        { id: 1, name: 'Detergentes', products: ['Detergente líquido', 'Detergente en polvo', 'Detergente para lavavajillas'] },
        { id: 2, name: 'Desinfectantes', products: ['Desinfectante multiusos', 'Desinfectante de superficies', 'Desinfectante de manos'] },
        { id: 3, name: 'Utensilios de limpieza', products: ['Escobas', 'Traperos', 'Cepillos', 'Guantes'] }
      ],
      activeCategory: null
    };
  }

  handleCategoryHover = (categoryId) => {
    this.setState({ activeCategory: categoryId });
  }

  render() {
    const { categories, activeCategory } = this.state;

    return (
      <div className="categories-container">
        <div className="categories">
          {categories.map(category => (
            <div
              key={category.id}
              className={`category ${activeCategory === category.id ? 'active' : ''}`}
              onMouseOver={() => this.handleCategoryHover(category.id)}
              onMouseOut={() => this.handleCategoryHover(null)}
            >
              <h2>{category.name}</h2>
              {activeCategory === category.id &&
                <ul>
                  {category.products.map(product => (
                    <li key={product}>{product}</li>
                  ))}
                </ul>
              }
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Categories;
