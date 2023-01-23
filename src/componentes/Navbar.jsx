import React from 'react'
import Logo from '../imagenes/logocityled.png'
import {FaShoppingCart } from "react-icons/fa";
import '../hojas-de-estilo/navbar.css';
import { BsWhatsapp } from 'react-icons/bs'
import { useState } from 'react';


export const Navbar = ({ allProducts, setAllProducts, total, countProducts, setCountProducts, setTotal
}) => {
	const [active, setActive] = useState(false);

	const onDeleteProduct = (product) => {
		const results = allProducts.filter(
			item => item.id !== product.id
		);

		setTotal(total - product.price * product.quantity);
		setCountProducts(countProducts - product.quantity);
		setAllProducts(results);
	};

	const onCleanCart = () => {
		setAllProducts([]);
		setTotal(0);
		setCountProducts(0);
	};

	const pedirWhatsapp = () => {
		let productsWhatsApp = allProducts.map(
			(product) =>
		`- ${product.quantity} - ${product.name} $${product.price}`);

		const productSpace = productsWhatsApp.join("/n");

		return window.location.assign(
			"https://api.whatsapp.com/send?phone=584245532742&text=Hola,%20estoy%20interesad@%20en%20adquirir%20los%20siguientes%20productos:" +
			" " + productSpace
		)
		
		}
	


	return (
		<header>
			<img className='logo-navbar' src={Logo} alt="" srcset="" />
			<a href="#Nosotros">Nosotros</a>
			<a href="#ProductList">Productos</a>
			<div className='container-icon'>
				<div
					className='container-cart-icon'
					onClick={() => setActive(!active)}
				>
					<button className='	carrito-icon'>< FaShoppingCart /></button>
					<div className='count-products'>
						<span id='contador-productos'>{countProducts}</span>
					</div>
				</div>

				<div
					className={`container-cart-products ${
						active ? '' : 'hidden-cart'
					}`}
				>
					{allProducts.length ? (
						<>
							<div className='row-product'>
								{allProducts.map(product => (
									<div className='cart-product' key={product.id}>
										<div className='info-cart-product'>
											<span className='cantidad-producto-carrito'>
												{product.quantity}
											</span>
											<p className='titulo-producto-carrito'>
												{product.name}
											</p>
											<span className='precio-producto-carrito'>
												${product.price}
											</span>
											
										</div>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											fill='none'
											viewBox='0 0 24 24'
											strokeWidth='1.5'
											stroke='currentColor'
											className='icon-close'
											onClick={() => onDeleteProduct(product)}
										>
											<path
												strokeLinecap='round'
												strokeLinejoin='round'
												d='M6 18L18 6M6 6l12 12'
											/>
										</svg>
									</div>
								))}
							</div>

							<div className='cart-total'>
								<h3>Total:</h3>
								<span className='total-pagar'>${total}</span>
							</div>
							<button className='finalizar-pedido' onClick={pedirWhatsapp}>Finalizar pedido <BsWhatsapp /></button>
							<button className='btn-clear-all' onClick={onCleanCart}>
								Vaciar Carrito
							</button>
						</>
					) : (
						<p className='cart-empty'>El carrito está vacío</p>
						
					)}
				</div>
			</div>
		</header>
	);
};