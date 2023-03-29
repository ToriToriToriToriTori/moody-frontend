function EmotionListItem (props) {
    return (
        <div className="emotion-list-item">
            <div className="emo-icon">{props.emoitem.emotion}</div>
            <div className="emo-other">
                <div className="list-item-reason">{props.emoitem.reason}</div>
                <div className="list-item-description">{props.emoitem.description}</div>
            </div>
        </div>
    );
}

export default EmotionListItem;