import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-10 px-5">
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        <div>
          <h3 className="text-lg font-semibold mb-2">Shop</h3>
          <ul>
            <li><Link href="/products">Products</Link></li>
            <li><Link href="/categories">Categories</Link></li>
            <li><Link href="/brands">Brands</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Information</h3>
          <ul>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/terms">Terms & Conditions</Link></li>
            <li><Link href="/privacy">Privacy Policy</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Customer Service</h3>
          <ul>
            <li><Link href="/contact">Contact Us</Link></li>
            <li><Link href="/returns">Returns & Exchanges</Link></li>
            <li><Link href="/shipping">Shipping & Delivery</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
          <ul>
            <li><Link href="#">Facebook</Link></li>
            <li><Link href="#">Twitter</Link></li>
            <li><Link href="#">Instagram</Link></li>
          </ul>
        </div>
      </div>

      <p className="text-center text-sm mt-5">
        © {new Date().getFullYear()} Your Company Name. All rights reserved.
      </p>

    </footer>
  );
}
