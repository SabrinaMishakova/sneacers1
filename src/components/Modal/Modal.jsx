import './Modal.css'
import Button from '../Button/Button'
import Cart from '../Cart/Cart';
export default function Modal() {
    function mod() {
        let modal = document.getElementById('modal');
        modal.classList.toggle('hidden');
    }
    return (
        <>
            <div id='modal' onClick={mod} className="modal hidden">
                <div className="cart">
                    <div className="cart-top">
                        <h2>Корзина</h2>
                        <Cart/>
                    </div>
                    <div className="cart-bottom">
                        <div className="text">
                            <p>Итого:</p>
                            <b>21 490</b>
                        </div>
                        <div className="text">
                            <p>Налог 5%:</p>
                            <b>1077</b>
                        </div>
                        <Button padding="15px" bradius="18px"> Оформить заказ → </Button>
                    </div>
                </div>
            </div>
        </>
    )
}