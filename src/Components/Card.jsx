import './Card.css'

function Card() {
    return (

        <div className="card">
            <img className='product' src={"https://rukminim1.flixcart.com/image/416/416/kuyf8nk0/computer/3/n/s/mk183hn-a-laptop-apple-original-imag7yzkbgbwvwq3.jpeg"} alt="" />
            <h3>Apple 2021 Macbook Pro M1 Pro</h3>
            <p>16 GB/1 TB SSD/Mac OS Monterey) MK193HN/A  (16.2 inch, Space Grey, 2.1 kg)</p>


            <div className='buttons'>
                <button className='btn'>Buy</button>
                <button className='btn'>Cart</button>

            </div>
        </div>

    );
}

export default Card;
