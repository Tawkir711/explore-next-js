import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const NotFoundPage = () => {
  return (
    <div>
      <div className="text-center">
        <h2 className="text-3xl font-bold text-blue-500 mt-5">
          404
          <br />
          Page not Found ...!!
        </h2>
        <Link href={"/"}>
          <button className="btn border border-black mt-5 text-3xl font-bold text-blue-500">Go back Home</button>
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;