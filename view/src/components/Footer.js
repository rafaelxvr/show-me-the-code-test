import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from './Button'
import './Footer.css'

function Footer() {
  return (
    <div className="footer-container">
        <section className="footer-subscription">
            <p className="footer-subscription-heading">
                Assine a nossa Newsletter para receber novidades sobre nossos planos!
            </p>
            <p className="footer-subscription-text">
                Você pode cancelar sua assinatura a qualquer momento.
            </p>
            <div className="input-areas">
                <form>
                    <input type="email" name="email" placeholder="Seu melhor E-mail" className="footer-input" />
                    <Button buttonStyle='btn--outline'>Assinar</Button>
                </form>
            </div>
        </section>
        <div className="footer-links">
            <div className="footer-link-wrapper">
                <div className="footer-link-items">
                    <h2>Sobre Nós</h2>
                    <Link to='/sign-up'>Como funciona</Link>
                    <Link to='/'>Depoimentos de Usuários</Link>
                    <Link to='/'>Carreira</Link>
                    <Link to='/'>Investidores</Link>
                    <Link to='/'>Termos de Serviço</Link>
                </div>
                <div className="footer-link-items">
                    <h2>Contate-nos</h2>
                    <Link to='/'>Contact</Link>
                    <Link to='/'>Suporte</Link>
                    <Link to='/products'>Planos</Link>
                    <Link to='/services'>Serviços</Link>
                </div>
            </div>

            <div className='footer-link-wrapper'>
                <div class='footer-link-items'>
                    <h2>Vídeos</h2>
                    <Link to='/'>Envie um Vídeo</Link>
                    <Link to='/'>Embaixadores</Link>
                    <Link to='/'>Agência</Link>
                    <Link to='/'>Influencers</Link>
                </div>
                <div class='footer-link-items'>
                    <h2>Mídia Social</h2>
                    <Link to='/'>Instagram</Link>
                    <Link to='/'>Facebook</Link>
                    <Link to='/'>Youtube</Link>
                    <Link to='/'>Twitter</Link>
                </div>
            </div>
        </div>
        <section className="social-media">
            <div className="social-media-wrap">
                <div className="footer-logo">
                    <Link to="/" className="social-logo">
                        VxTel <i className="fab fa-typo3"></i>
                    </Link>
                </div>
                <small className="website-rights">VxTel © 2022 </small>
                <div className="social-icons">
                    <Link
                    class='social-icon-link facebook'
                    to='/'
                    target='_blank'
                    aria-label='Facebook'
                    >
                    <i class='fab fa-facebook-f' />
                    </Link>
                    <Link
                    class='social-icon-link instagram'
                    to='/'
                    target='_blank'
                    aria-label='Instagram'
                    >
                    <i class='fab fa-instagram' />
                    </Link>
                    <Link
                    class='social-icon-link youtube'
                    to='/'
                    target='_blank'
                    aria-label='Youtube'
                    >
                    <i class='fab fa-youtube' />
                    </Link>
                    <Link
                    class='social-icon-link twitter'
                    to='/'
                    target='_blank'
                    aria-label='Twitter'
                    >
                    <i class='fab fa-twitter' />
                    </Link>
                    <Link
                    class='social-icon-link linkedin'
                    to='/'
                    target='_blank'
                    aria-label='LinkedIn'
                    >
                    <i class='fab fa-linkedin' />
                    </Link>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Footer