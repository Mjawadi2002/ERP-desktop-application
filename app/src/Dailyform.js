import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Dailyform.css';
import {Toaster,toast} from 'sonner';

export default function DailyForm() {
    const [expressQuantity, setExpressQuantity] = useState('');
    const [capucinQuantity, setCapucinQuantity] = useState('');
    const [directQuantity, setDirectQuantity] = useState('');
    const [jusQuantity, setJusQuantity] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Form submitted');
  
        const dailyData = {
            express_quantity: expressQuantity,
            capucin_quantity: capucinQuantity,
            direct_quantity: directQuantity,
            jus_quantity: jusQuantity,
        };
  
        console.log('Daily data:', dailyData);
  
        setLoading(true); // Show loading indicator
  
        try {
            const response = await fetch('http://localhost:4000/api/daily/create', { // Updated URL
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(dailyData),
            });
  
            console.log('Response:', response);
  
            if (response.ok) {
                toast("daily data saved succesfully")
                setExpressQuantity('0');
                setCapucinQuantity('0');
                setDirectQuantity('0');
                setJusQuantity('0');
            } else {
                console.error('Failed to save daily data');
            }
        } catch (error) {
            console.error('Error:', error);
        } finally {
            setLoading(false); // Hide loading indicator
        }
    };

    return (
        <>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <div className="container-fluid">
            <div className="form">
                <h3>Fill Daily</h3>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="express">Express*</label>
                        <input
                            type="number"
                            id="express"
                            className="form-control"
                            placeholder="Enter quantity"
                            value={expressQuantity}
                            onChange={(e) => setExpressQuantity(e.target.value)}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="capucin">Capucin*</label>
                        <input
                            type="number"
                            id="capucin"
                            className="form-control"
                            placeholder="Enter quantity"
                            value={capucinQuantity}
                            onChange={(e) => setCapucinQuantity(e.target.value)}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="direct">Direct*</label>
                        <input
                            type="number"
                            id="direct"
                            className="form-control"
                            placeholder="Enter quantity"
                            value={directQuantity}
                            onChange={(e) => setDirectQuantity(e.target.value)}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="jus">Juice*</label>
                        <input
                            type="number"
                            id="jus"
                            className="form-control"
                            placeholder="Enter quantity"
                            value={jusQuantity}
                            onChange={(e) => setJusQuantity(e.target.value)}
                            required
                        />
                    </div>

                    <br />
                    <Toaster />
                    <button type="submit" className="btn btn-warning" disabled={loading}>
                        {loading ? 'Saving...' : 'Save'}
                    </button>
                </form>
            </div>
        </div>
        </>
    );
}
