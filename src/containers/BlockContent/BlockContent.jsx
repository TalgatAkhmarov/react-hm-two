import React from 'react';
import Button from '../../components/Button/Button';
import Card from '../../components/Card/Card';
import './BlockContent.css';


const products = [
	{
		title: 'LeBron James Lakers City Edition',
		description: 'Nike NBA Swingman Jersey',
		price: '$290',	
        img: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/b7d9211c-26e7-431a-ac24-b0540fb3c00f/air-force-1-07-shoes-WrLlWX.png',
	},
	{
		title: 'Chicago Bulls',
		description: 'Nike NBA ',
		price: '$1290',
		img: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/b7d9211c-26e7-431a-ac24-b0540fb3c00f/air-force-1-07-shoes-WrLlWX.png',
	},
	{
		title: 'Chicago Bulls',
		description: 'Nike NBA ',
		price: '$1290',
		img: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/b7d9211c-26e7-431a-ac24-b0540fb3c00f/air-force-1-07-shoes-WrLlWX.png',	
	},
	{
		title: 'Chicago Bulls',
		description: 'Nike NBA ',
		price: '$1290',
		img: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/b7d9211c-26e7-431a-ac24-b0540fb3c00f/air-force-1-07-shoes-WrLlWX.png',
	},
    {
		title: 'LeBron James Lakers City Edition',
		description: 'Nike NBA Swingman Jersey',
		price: '$290',	
        img: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/b7d9211c-26e7-431a-ac24-b0540fb3c00f/air-force-1-07-shoes-WrLlWX.png',
	},
	{
		title: 'Chicago Bulls',
		description: 'Nike NBA ',
		price: '$1290',
		img: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/b7d9211c-26e7-431a-ac24-b0540fb3c00f/air-force-1-07-shoes-WrLlWX.png',
	},
	{
		title: 'Chicago Bulls',
		description: 'Nike NBA ',
		price: '$1290',
		img: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/b7d9211c-26e7-431a-ac24-b0540fb3c00f/air-force-1-07-shoes-WrLlWX.png',	
	},
	{
		title: 'Chicago Bulls',
		description: 'Nike NBA ',
		price: '$1290',
		img: 'https://img01.ztat.net/article/spp-media-p1/6598af14fcfb4fa7b3ae7d5bf2be7961/65b19f6042c441769683bb7ed18e3717.jpg?imwidth=762&filter=packshot',
	},
    {
		title: 'LeBron James Lakers City Edition',
		description: 'Nike NBA Swingman Jersey',
		price: '$290',	
        img: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/b7d9211c-26e7-431a-ac24-b0540fb3c00f/air-force-1-07-shoes-WrLlWX.png',
	},
	{
		title: 'Chicago Bulls',
		description: 'Nike NBA ',
		price: '$1290',
		img: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/b7d9211c-26e7-431a-ac24-b0540fb3c00f/air-force-1-07-shoes-WrLlWX.png',
	},
	{
		title: 'Chicago Bulls',
		description: 'Nike NBA ',
		price: '$1290',
		img: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/b7d9211c-26e7-431a-ac24-b0540fb3c00f/air-force-1-07-shoes-WrLlWX.png',	
	},
	{
		title: 'Chicago Bulls',
		description: 'Nike NBA ',
		price: '$1290',
		img: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/b7d9211c-26e7-431a-ac24-b0540fb3c00f/air-force-1-07-shoes-WrLlWX.png',
	}

]

const BlockContent = () => {
  return (
    <div className='container'>
        <div className='container-block'>
            <div className='content-block-two' >
                <p>Jerseys kobe bryant</p>
            </div>
            <div className='title-block-start-two'>
                <p>
                    <span className='color-yellow'>kobe </span> 
                    <span className='color-purple'>bryant</span> 
                </p>
            </div>
            <div className='title-block-end-two'>
                <p>Authentic edition</p>
            </div>
            <div className="text-content-block-two">
                <p>
                    <p>Kobe bryant: a basketball legend. bryant crafted a storied career</p> 
                    <p>In his 20 seasons with the lakers. the lagacy of kobe bryant was a far-reaching one.</p> 
                </p>
            </div>
            <div className="card-block">
                <div className="card-container">
                    {products.map(product => (
                        <Card
                            img={product.img}
                            title={product.title} 
                            description={product.description}
                            price={product.price} />
                    ))}
                </div>
            </div>
            <div className="button-block">
                <Button/>
            </div>
        </div>
    </div>
  );
}

export default BlockContent;