import React from "react";
import styles from './index.module.scss';
import ModalBlock from "../../UI/ModalBlock/ModalBlock";
function WomanTreining() {
    
    return ( 
        <div className={styles.WomanTreining}>
                <div className={styles.WomanTreiningFullBody}>
                    <div className={styles.pictureWomanFullBody}></div>
                    <div className={styles.bannerWoman}>Full Body (Все тело)</div>
                    <div className={styles.BlockInfoWoman}>
                    <ModalBlock buttonText={"Ознакомиться"}>
                    <div className={styles.info}>
                                <ul className={styles.infoUl}>
                                    <p> FULL BODY (ВСЕ ТЕЛО)</p>
                                    <li className={styles.li}><span>Программа</span> расчитана на 3 дня в неделю тренировок в зале (например,  пн – ср – пт, либо как удобней). Упражнения в программе подобраны таким образом, что будет легко освоить даже человеку, который в первый раз идёт в зал. Технически сложных движений, например, приседа нет. Использованы преимущественно тренажеры и их аналоги, где сложно откланиться от техники. В тоже время в программу включены самые эффективные упражнения на сегодняшний день.</li>
                                    <li className={styles.li}><span>Время тренировки:</span> около 1,5 часа.</li>
                                    <li className={styles.li}><span>Длительность программы:</span> 3+ месяца. Можно и дольше. Если прогрессия есть – «не чини то, что еще не сломалось».</li>
                                    <li className={styles.li}><span>Структура самой программы – фул бади (все тело).</span> Нет, фул бади подходит не только новичкам. Она идеально подходит тем, кто может заниматься только два – три раза в неделю, чтобы равномерно распределить тренировочный объем.</li>
                                </ul>
                            </div>
                        </ModalBlock>
                    </div>
                    <div className={styles.FirstTreining}>
                    <ModalBlock buttonText={"Первая тренировка"}>
                    <div className={styles.info}>
                                <ul className={styles.infoUl}>
                                    <p>Первая тренировка</p>
                                    <li className={styles.li}>Становая тяга на прямых ногах 3х15</li>
                                    <li className={styles.li}>Приседания с весом 5х15 (70%*)</li>
                                    <li className={styles.li}>Трицепсовый жим на верхнем блоке 3х12</li>
                                    <li className={styles.li}>Жим стоя 3х10</li>
                                    <li className={styles.li}>Боковые скручивания 3х15</li>
                                    <li className={styles.li}>Молоток 3х15</li>
                                </ul>
                                <h5>*В процентах (%) указан вес от максимального.</h5>
                            </div>
                        </ModalBlock>
                    </div>
                    <div className={styles.SecondTreining}>
                    <ModalBlock buttonText={"Вторая тренировка"}>
                    <div className={styles.info}>
                                <ul className={styles.infoUl}>
                                    <p>Вторая тренировка</p>
                                    <li className={styles.li}>Гребной тренажер 2х15 (80%*)</li>
                                    <li className={styles.li}>Жим сидя в Хаммере 2х15</li>
                                    <li className={styles.li}>Тяга вертикального блока 3х15</li>
                                    <li className={styles.li}>Скручивание лёжа 4х15</li>
                                    <li className={styles.li}>Сгибания ног 3х15</li>
                                    <li className={styles.li}>Выпады с гантелями 4х15</li>
                                    <li className={styles.li}>Приседы с весом с широкой постановкой ног 3х15</li>
                                </ul>
                                <h5>*В процентах (%) указан вес от максимального.</h5>
                            </div>
                        </ModalBlock>
                    </div>
                    <div className={styles.ThirdTreining}>
                    <ModalBlock buttonText={"Третья тренировка"}>
                    <div className={styles.info}>
                                <ul className={styles.infoUl}>
                                    <p>Третья тренировка</p>
                                    <li className={styles.li}>Гребной тренажер 3х10 (80%*)</li>
                                    <li className={styles.li}>Тяга к подбородку 2х8</li>
                                    <li className={styles.li}>Подъём штанги на бицепс 3х12</li>
                                    <li className={styles.li}>Разгибания ног 4х15</li>
                                    <li className={styles.li}>Приседы со штангой 3х8</li>
                                    <li className={styles.li}>Наклоны со штангой 3х15</li>
                                    
                                </ul>
                                <h5>*В процентах (%) указан вес от максимального.</h5>
                            </div>
                        </ModalBlock>
                    </div>
                    <a href={`${process.env.PUBLIC_URL}/WomanTreining1.txt`} download> <button className={styles.Download}>Скачать план тренировок</button></a>
                </div>

                <div className={styles.WomanTreiningMuscleGroups}>
                <div className={styles.pictureWomanMuscleGroups}></div>
                    <div className={styles.bannerWoman}>Сплит (отдельные группы мышц)</div>
                    <div className={styles.BlockInfoWoman}>
                    <ModalBlock buttonText={"Ознакомиться"}>
                    <div className={styles.info}>
                                <ul className={styles.infoUl}>
                                    <p> Сплит (отдельные группы мышц)</p>
                                    <li className={styles.li}><span>Сплит-тренировка</span>— это тренировочный комплекс, разбитый на несколько частей. За одно занятие получается проработать 2-3 различные группы мышц. Также эта программа предусматривает время для полноценного отдыха — ведь она дает сильную нагрузку, и организму необходимо восстановиться.</li>
                                    <li className={styles.li}><span>Время тренировки:</span> около 60-90 минут.</li>
                                    <li className={styles.li}><span>Длительность программы:</span> 2+ месяца. Можно и дольше. Если прогрессия есть – «не чини то, что еще не сломалось».</li>
                                    <li className={styles.li}><span>Сплит-тренировки</span> не столь эффективны для новичков, однако ими успешно могут пользоваться опытные атлеты, и профессионалы.</li>
                                </ul>
                            </div>
                        </ModalBlock>
                    </div>
                    <div className={styles.FirstTreining}>
                    <ModalBlock buttonText={"Первая тренировка"}>
                    <div className={styles.info}>
                                <ul className={styles.infoUl}>
                                    <p>Первая тренировка</p>
                                    <h6>(ноги + ягодицы + пресс)</h6>
                                    <li className={styles.li}>Приседания со штангой. Широкая постановка ног, носки разведены диагонально 3х10 (70%*)</li>
                                    <li className={styles.li}>Выпады с гантелями 3х12</li>
                                    <li className={styles.li}>Становая тяга в румынском стиле 2х12</li>
                                    <li className={styles.li}>Подъемы на носки в тренажере или с гантелей 3х15</li>
                                    <li className={styles.li}>Скручивания корпуса на наклонной скамье 3х20</li>
                                    <li className={styles.li}>Планка. Время прибывания в позе планки стремитесь увеличить с 30 секунд до 2 минут за подход.</li>
                                </ul>
                                <h5>*В процентах (%) указан вес от максимального.</h5>
                            </div>
                        </ModalBlock>
                    </div>
                    <div className={styles.SecondTreining}>
                    <ModalBlock buttonText={"Вторая тренировка"}>
                    <div className={styles.info}>
                                <ul className={styles.infoUl}>
                                    <p>Вторая тренировка</p>
                                    <h6>(спина + бицепс)</h6>
                                    <li className={styles.li}>Подтягивания 3 х 8</li>
                                    <li className={styles.li}>Тяга штанги к животу 3х12</li>
                                    <li className={styles.li}>Тяга гантели к поясу каждой рукой поочередно 3х12 (80%*)</li>
                                    <li className={styles.li}>Гиперэкстензия 3х15</li>
                                    <li className={styles.li}>Сгибание рук с гантелями на бицепс 3х12</li>
                                </ul>
                                <h5>*В процентах (%) указан вес от максимального.</h5>
                            </div>
                        </ModalBlock>
                    </div>
                    <div className={styles.ThirdTreining}>
                    <ModalBlock buttonText={"Третья тренировка"}>
                    <div className={styles.info}>
                                <ul className={styles.infoUl}>
                                    <p>Третья тренировка</p>
                                    <h6>(грудь + трицепс + плечи)</h6>
                                    <li className={styles.li}>Отжимания с широкой постановкой рук 3х12</li>
                                    <li className={styles.li}>Жим гантелей лежа на скамье 3х12 (85%*)</li>
                                    <li className={styles.li}>Разведение гантелей 2х12</li>
                                    <li className={styles.li}>Разведение гантелей в стороны стоя 3х12</li>
                                    <li className={styles.li}>Разгибание рук на трицепс в блочном тренажере 3х15</li>
                                </ul>
                                <h5>*В процентах (%) указан вес от максимального.</h5>
                            </div>
                        </ModalBlock>
                    </div>

                    <a href={`${process.env.PUBLIC_URL}/WomanTreining2.txt`} download> <button className={styles.Download}>Скачать план тренировок</button></a>
                </div>
                </div>
            
    );
  }
  
  export default WomanTreining;
  