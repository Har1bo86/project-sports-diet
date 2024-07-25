import styles from "../Racion/index.module.scss";
import ModalBlock from "../../../components/UI/ModalBlock/ModalBlock";

function Racion() {
    return (
        <div className={styles.racion}>
            <div className={styles.h1}>
                <h1>Все о правильном <span>питании:</span></h1>
            </div>
            <div className={styles.main}>

                <div className={styles.blockInfo}>
                    <div className={styles.step}>01</div>
                    <div className={styles.title}>Принципы здорового питания, как перейти на ПП</div>
                    <div className={styles.details}>
                        <ModalBlock buttonText={"Подробнее"}>
                            <div className={styles.detailsInfo}>
                                <div className={styles.modalTitle}>Принципы здорового питания, как перейти на ПП</div>
                                <div className={styles.modalMain}>
                                    <div className={styles.blockImages1}></div>
                                    <div className={styles.modalText}><h4><span>Правильное питание</span> – это способ заботиться о себе, планировать бюджет и находить новые интересы в жизни. Это здоровая альтернатива диетам-семидневкам, голоданию или бесконтрольному поглощению всего того, что оказалось на тарелке. Переход на правильное питание помогает нормализовать массу тела, стать более энергичным и ответственным за свою жизнь.</h4></div>
                                </div>
                            </div>
                        </ModalBlock>
                    </div>
                    <div className={styles.photo1}>
                    </div>
                </div>

                <div className={styles.blockInfo}>
                    <div className={styles.step}>02</div>
                    <div className={styles.title}>Что такое здоровое питание</div>
                    <div className={styles.details}>
                        <ModalBlock buttonText={"Подробнее"}>
                            <div className={styles.detailsInfo}>
                                <div className={styles.modalTitle}>Что такое здоровое питание</div>
                                <div className={styles.modalMain}>
                                    <div className={styles.blockImages2}></div>
                                    <div className={styles.modalText}>
                                        <h4><span>Правильное питание</span> – это рацион, снабжающий организм всеми необходимыми макро- и микроэлементами. Оно обеспечивает рост, развитие, нормальное функционирование всех систем органов, укрепляет здоровье и предотвращает развитие острых и хронических заболеваний.</h4>
                                        <p>Правильное питание – это долгая история. Это понимание:</p>
                                        <ul>
                                            <li>что и когда можно есть;</li>
                                            <li>в каком количестве и соотношении;</li>
                                            <li>как часто можно выбирать вредные продукты.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </ModalBlock>
                    </div>
                    <div className={styles.photo2}></div>
                </div>

                <div className={styles.blockInfo}>
                    <div className={styles.step}>03</div>
                    <div className={styles.title}>Как построить здоровый рацион</div>
                    <div className={styles.details}>
                        <ModalBlock buttonText={"Подробнее"}>
                            <div className={styles.detailsInfo}>
                                <div className={styles.modalTitle}>Как построить здоровый рацион</div>
                                <div className={styles.modalMain}>
                                    <div className={styles.blockImages3}></div>
                                    <div className={styles.modalText}>
                                        <h4><span>Следование правилам</span> правильного питания позволит удалить из меню вредные, калорийные, имеющие сложный состав, насыщенные консервантами продукты.</h4>
                                        <h6><span>Источники белка</span> - нежирное мясо,рыба,яйца,грибы,бобовые,орех,М/П</h6>
                                        <h6><span>Источники жира</span> - растительное масло,оливки,жирная рыба,орехи,авокадо,сливочное масло</h6>
                                        <h6><span>Источники углеводов</span> - овощи,фрукты,злаки,мед,хлеб/криспы</h6>
                                    </div>
                                </div>
                            </div>
                        </ModalBlock>
                    </div>
                    <div className={styles.photo3}></div>
                </div>

                <div className={styles.blockInfo}>
                    <div className={styles.step}>04</div>
                    <div className={styles.title}>Как перейти на правильное питание</div>
                    <div className={styles.details}>
                        <ModalBlock buttonText={"Подробнее"}>
                            <div className={styles.detailsInfo}>
                                <div className={styles.modalTitle}>Как перейти на правильное питание?</div>
                                <div className={styles.modalMain}>
                                    <div className={styles.blockImages4}></div>
                                    <div className={styles.modalText}>
                                        <h4>Переходя на <span>здоровое питание,</span> надо четко понимать, что это рацион на каждый день. Придерживаясь важных и простых принципов, каждый сможет перейти на здоровую пищу:</h4>
                                        <ul>
                                            <li>Составить перечень полезных продуктов с учетом собственных вкусов.</li>
                                            <li>Выписать список полезных перекусов, чтобы избежать соблазна покупать к чаю булочки или шоколад.</li>
                                            <li>Начинать утро со стакана воды и приема пищи в течение первого часа после пробуждения.</li>
                                            <li>Перейти на блюда, имеющие простой состав. Например, овощи на гриле и кусок отварного мяса.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </ModalBlock>
                    </div>
                    <div className={styles.photo4}></div>
                </div>

                <div className={styles.blockInfo}>
                    <div className={styles.step}>05</div>
                    <div className={styles.title}>Рацион на неделю</div>
                    <div className={styles.details}>
                        <ModalBlock buttonText={"Подробнее"}>
                            <div className={styles.detailsInfo}>
                                <p>Рацион на неделю:</p>
                                <table>
                                    <tr className={styles.tr1}>
                                        <td className={styles.td1}>День</td>
                                        <td className={styles.td1}>Завтрак</td>
                                        <td className={styles.td1}>Обед</td>
                                        <td className={styles.td1}>Ужин</td>
                                        <td className={styles.td1}>Перекусы</td>
                                    </tr>
                                    <tr>
                                        <td className={styles.td1}>1</td>
                                        <td>Овсянка с фруктами Хлебец с соленым творогом</td>
                                        <td>Суп с мясом на овощном бульоне Бурый рис, отварное филе индейки</td>
                                        <td>Отварная рыба, овощной салат с заправкой из натурального йогурта</td>
                                        <td>Вареное яйцо, огурец Яблоко</td>
                                    </tr>
                                    <tr>
                                        <td className={styles.td1}>2</td>
                                        <td>Омлет с брокколи Персик</td>
                                        <td>Куриный бульон с домашней лапшой, кусок хлеба Запеченная свинина с овощами</td>
                                        <td>Отварная курица, салат из огурцов и помидор, заправленный йогуртом или простоквашей</td>
                                        <td>Стакан кефира 2 цельнозерновых хлебца с авокадо</td>
                                    </tr>
                                    <tr>
                                        <td className={styles.td1}>3</td>
                                        <td>Перловая каша Бутерброд с сыром</td>
                                        <td>Суп-пюре из тыквы Запеченный минтай с отварным картофелем</td>
                                        <td>Котлеты из рыбы с овощным рагу</td>
                                        <td>Виноград Творог</td>
                                    </tr>
                                    <tr>
                                        <td className={styles.td1}>4</td>
                                        <td>Творожная запеканка Яблоко</td>
                                        <td>Грибной суп с лапшой Тушеная капуста с мясом</td>
                                        <td>Стейк из горбуши с салатом</td>
                                        <td>Миндаль Банан</td>
                                    </tr>
                                    <tr>
                                        <td className={styles.td1}>5</td>
                                        <td>Гречневая каша/кусок курицы Хлебец с сыром</td>
                                        <td>Запеканка из брокколи и цветной капусты Отварная говядина</td>
                                        <td>Творожная запеканка</td>
                                        <td>Вареное яйцо Огурец и 2 хлебца</td>
                                    </tr>
                                    <tr>
                                        <td className={styles.td1}>6</td>
                                        <td>Рисовая каша с маслом Тост с джемом</td>
                                        <td>Щи постные Гречка с грибами</td>
                                        <td>Филе индейки с овощным салатом</td>
                                        <td>Апельсин Стакан кефира Цельнозерновой хлебец</td>
                                    </tr>
                                    <tr>
                                        <td className={styles.td1}>7</td>
                                        <td>Бурый рис с отварной рыбой Сухофрукты</td>
                                        <td>Рыбный суп с картофелем Квашеная капуста Отварная индейка</td>
                                        <td>Омлет с томатами</td>
                                        <td>2 яблока Творог без наполнителей</td>
                                    </tr>
                                </table>
                            </div>
                        </ModalBlock>
                    </div>
                    <div className={styles.photo5}></div>
                </div>
            </div>
        </div>
    )
}

export default Racion;