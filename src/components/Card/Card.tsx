import './Card.scss';
import { useState } from 'react';
import { formatDateAndTime, formatDuration, formattedNumber } from '../../utils/utils.ts';
import { FaGear } from 'react-icons/fa6';

export interface ICard {
    id: string;
    app_id: number;
    create_dt: string;
    review_dt: string;
    complete_dt?: string;
    system: string;
    app_type: string;
    object_place: {
        name?: string;
        street: string;
        town: string;
    };
    app_text: string;
    app_status: 'in_progress' | 'expired' | 'has_feedback' | 'completed';
    is_tech: boolean;
    images: string[];
}

const statusMap: Record<ICard['app_status'], string> = {
    in_progress: 'В работе',
    expired: 'Просрочена',
    completed: 'Выполнена',
    has_feedback: 'Есть отзыв',
};

const Card = ({ app_id, app_status, create_dt, review_dt, system, complete_dt, object_place, app_type, app_text, is_tech }: ICard) => {
    const is_complete_case = !!complete_dt;

    const [expand, setExpand] = useState(false);
    const [lineCount, setLineCount] = useState(0);
    const canBeExpanded = lineCount > 3;

    function getLineCount(element: HTMLElement | null) {
        if (!element) return 0;
        const computedStyle = window.getComputedStyle(element);
        const lineHeight = parseFloat(computedStyle.lineHeight);
        const elementHeight = element.clientHeight;
        return Math.ceil(elementHeight / lineHeight);
    }

    return (
        <div className={'card'}>
            <div className={'card__header'}>
                <div className={`card-number card-number_${app_status}`}>№ {formattedNumber(app_id)}</div>
                <div className={'card-status'}>{statusMap[app_status]}</div>
                {is_tech && (
                    <div className={'gear'}>
                        <FaGear />
                    </div>
                )}
            </div>
            <div className={'card__body'}>
                <div className={'point'}>
                    <div className={'name'}>Создана:</div>
                    <div className={'value'}>
                        {formatDateAndTime(create_dt)} {is_complete_case && `(${formatDuration(complete_dt, create_dt)})`}
                    </div>
                </div>
                {!is_complete_case && (
                    <div className={'point'}>
                        <div className={'name'}>Контроль:</div>
                        <div className={'value'}>{formatDateAndTime(review_dt)}</div>
                    </div>
                )}
                {is_complete_case && (
                    <div className={'point'}>
                        <div className={'name'}>Выполнена:</div>
                        <div className={'value'}>{formatDateAndTime(complete_dt)}</div>
                    </div>
                )}
                <div className={'point'}>
                    <div className={'name'}>Система:</div>
                    <div className={'value'}>
                        {system} <span className={'mx-1'}>|</span> {app_type}
                    </div>
                </div>
                <div className={'point'}>
                    <div className={'name'}>Объект:</div>
                    <div className={'value'}>
                        {!!object_place.name && `${object_place.name},`} {object_place.town}, {object_place.street}
                    </div>
                </div>
                <hr className={'card-hr'} />

                <div className={'card-text-wrapper'}>
                    <div className={`text-wrapper ${(expand || !canBeExpanded) && 'text-wrapper_expand'}`}>
                        <div
                            ref={(elem) => {
                                setLineCount(getLineCount(elem));
                            }}
                            className={`text `}>
                            {app_text}
                        </div>
                    </div>

                    {canBeExpanded && (
                        <button className={`btn-expand ${expand && 'btn-expand_expanded'}`} onClick={() => setExpand(!expand)}>
                            {!expand ? (
                                <>
                                    <span className={'stretched-arrow'}>{'\u2BC6'}</span>Читать далее
                                </>
                            ) : (
                                <>
                                    <span className={' stretched-arrow stretched-arrow_down'}>{'\u2BC5'}</span>Свернуть
                                </>
                            )}
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Card;
