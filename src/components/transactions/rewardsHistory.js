import {Row, Col, Tab, Nav, Card, Badge, Table} from 'react-bootstrap';
import {useState, useEffect} from 'react';

function RewardsHistory({transactionsList}) {
    const [selectedMonth, setSelectedMonth] = useState('');
    const [selectedTransaction, setSelectedTransaction] = useState({});
    const [selectedYear, setSelectedYear] = useState(new Date().getFullYear()) 

    useEffect(() => {
        const yearList = transactionsList.transactions.filter(y => y.year === selectedYear);
        const monthList = yearList[0].monthlyTransactions.filter(m => m.month === selectedMonth);
        setSelectedTransaction(monthList);
    }, [selectedMonth]);

    const handleTabSelect = (key) => {
        setSelectedMonth('');
        setSelectedYear(Number(key));
    }

    return (
        <Row className="reward-history-container">
            <Col xs={12} md={12} className="mt-5 mb-5">
                <h4>Rewards History</h4>
                <Tab.Container id="left-tabs-example" defaultActiveKey={selectedYear} onSelect={activeKey => handleTabSelect(activeKey)}>
                    <Row>
                        <Col sm={12} className="mt-2 mb-2">
                        <Nav variant="pills">
                            {transactionsList.transactions.map(y => <Nav.Item key={y.year}>
                                <Nav.Link eventKey={y.year} className="mr-2" onClick={() => setSelectedMonth('')}>{y.year}</Nav.Link>
                            </Nav.Item>)}
                        </Nav>
                        </Col>
                        <Col sm={12} className="mt-4">
                        <Tab.Content>
                            {transactionsList.transactions.map(y => <Tab.Pane eventKey={y.year}>
                                {selectedMonth === '' && (y.monthlyTransactions.length !== 0 ? <Row>
                                    {y.monthlyTransactions.map((m, key) => <Col sm={6} md={3} key={`month-${y.year}`} className="month-summary-card">
                                        <Card body onClick={() => setSelectedMonth(m.month)}>
                                            <div className="float-end"><Badge pill bg="primary fw-bold">+</Badge></div>
                                            <div className="month mb-3">{m.month}</div>
                                            <div className="mb-2 text-end"><strong>{m.totalRewards}</strong> points earned</div>
                                            <div className="text-end"><strong>{m.totalTransactions}</strong> transactions</div>
                                        </Card>
                                    </Col>)}
                                </Row> : <Col sm={12}>
                                    <div className="no-results text-center mt-5 pt-5">No Transactions</div>
                                </Col>)}
                                {selectedMonth !== '' && selectedTransaction.length !== 0 && <Row>
                                    <Col sm={12}>
                                        <Card body>
                                            <div className="float-end"><Badge pill bg="primary fw-bold" onClick={() => setSelectedMonth('')}>x</Badge></div>
                                            <div className="month mb-1">{selectedTransaction[0].month}</div>
                                            <div className="mb-4">You earned <strong>{selectedTransaction[0].totalRewards}</strong> points in total from <strong>{selectedTransaction[0].totalTransactions}</strong> transactions</div>
                                            <Table responsive="sm" striped>
                                                <thead>
                                                    <tr>
                                                        <th>Order Date</th>
                                                        <th>Order Number</th>
                                                        <th>Item(s)</th>
                                                        <th>Order Status</th>
                                                        <th>Paid</th>
                                                        <th>Reward Points</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {selectedTransaction[0].orderHistory.map(e => <tr key={e.orderNumber}>
                                                        <td>{e.orderDate}</td>
                                                        <td className="order-number">{e.orderNumber}</td>
                                                        <td>{e.items}</td>
                                                        <td>{e.status}</td>
                                                        <td>${e.paid}</td>
                                                        <td>{e.rewards}</td>
                                                    </tr>)}
                                                </tbody>
                                            </Table>
                                        </Card>
                                    </Col>
                                </Row>}
                            </Tab.Pane>)}
                        </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </Col>
        </Row>
    );
}

export default RewardsHistory;