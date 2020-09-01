import React from 'react';

import wahtsAppIcon from '../../assets/images/icons/whatsapp.svg';
import './style.css';

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>

                <img src="https://avatars3.githubusercontent.com/u/39719285?s=460&u=7a4ab284252a4adc1f541dbc741817a4d7b1947f&v=4" alt="Professor" />
                <div>
                    <strong>Lenon developer</strong>
                    <span>Matemática</span>
                </div>
            </header>
            <p> Curte Matemática, futebol, churrasco!
                        <br /> <br />
                        Estudar, aprender e desenvolver software
                        <footer>
                    <p>Preço por hora <strong>R$ 80,00</strong></p>
                    <button type="button">
                        <img src={wahtsAppIcon} alt="Whatsapp" />
                                Entrar em contato
                            </button>
                </footer>
            </p>
        </article>

    )
}

export default TeacherItem;
