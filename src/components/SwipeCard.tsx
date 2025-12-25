type Props = {
  onSkip: () => void;
  onInterested: () => void;
};

const SwipeActions = ({ onSkip, onInterested }: Props) => {
  return (
    <div className="swipe-actions">
      <button className="skip-btn" onClick={onSkip}>
         Skip
      </button>
      <button className="interest-btn" onClick={onInterested}>
         Interested
      </button>
    </div>
  );
};

export default SwipeActions;
