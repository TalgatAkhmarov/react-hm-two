import React from 'react';
import './Top.css'
import Group from '../../assets/image/Group.svg';
import Card from '../../components/Card/Card';
import Button from '../../components/Button/Button';




const products = [
	{
		title: 'LeBron James Lakers City Edition',
		description: 'Nike NBA Swingman Jersey',
		price: '$290',
		img: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/b7d9211c-26e7-431a-ac24-b0540fb3c00f/air-force-1-07-shoes-WrLlWX.png'
	},
	{
		title: 'Chicago Bulls',
		description: 'Nike NBA ',
		price: '$1290',
		img: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/b7d9211c-26e7-431a-ac24-b0540fb3c00f/air-force-1-07-shoes-WrLlWX.png'

	},
	{
		title: 'Chicago Bulls',
		description: 'Nike NBA ',
		price: '$1290',
		img: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/b7d9211c-26e7-431a-ac24-b0540fb3c00f/air-force-1-07-shoes-WrLlWX.png"

	},
]


const Top = () => {

	return (

		<div className='container'>
			<div className='container-block'>
				<div className='content-block' >
					<p>Jerseys bestsellers</p>
				</div>
				<div className='title-block-start'>
					<p>bestsellers</p>
				</div>
				<div className='title-block-end'>
					<p>Collection</p>
				</div>
				<div className="text-content-block">
					<p>The jerseys of the best nba players of the regular seasons.</p>
				</div>
				<div className='tshirt'>
					{products.map(product => (
						<Card
							title={product.title}
							description={product.description}
							price={product.price}
							img={product.img}
						/>
					)
					)}
				</div>
				  <div className="button-block">
                <Button/>
            </div>

			</div>
		</div>
	)
}

export default Top