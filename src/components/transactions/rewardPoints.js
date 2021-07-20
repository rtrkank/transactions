import {Row, Col} from 'react-bootstrap';

function RewardPoints({totalRewards, rewardsExpiration}) {
    return (
        <Row className="justify-content-md-center reward-points-container">
            <Col md="auto" className="mt-5 mb-5 text-center">
                <h6>YOUR REWARDS</h6>
                <h2>{totalRewards} <span className="points">points</span></h2>
                <div className="expiration-date">Exp. {rewardsExpiration}</div>
            </Col>
        </Row>
    );
}

export default RewardPoints;