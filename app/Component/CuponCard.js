
"use client"

import React, { Component } from 'react';
import Image from 'next/image';

export class CuponCard extends Component {
  render() {
    return (
      <div className='h-[100%]'>
        <div>
          <img src="/OffBanner/b3.webp" alt="b2" />
        </div>
        <div className='flex '>
          <img className='w-[50%]' src="/OffBanner/b4-1.webp" alt="b2" />
          <img className='w-[50%]' src="/OffBanner/b4-2.webp" alt="b2" />
        </div>
      
        <div>
          <img src="/OffBanner/b5.webp" alt="b2" />
        </div>
        <div name="product" className='flex'>
          <div>
            <img src="/Products/p1.webp" alt="p1" />
          </div>
          <div>
            <img src="/Products/p2.webp" alt="p2" />
          </div>
          <div>
            <img src="/Products/p3.webp" alt="p3" />
          </div>
          <div>
            <img src="/Products/p4.webp" alt="p4" />
          </div>
          <div>
            <img src="/Products/p5.webp" alt="p5" />
          </div>
          <div>
            <img src="/Products/p6.webp" alt="p6" />
          </div>
        </div>
      </div>
    );
  }
}

export default CuponCard;
