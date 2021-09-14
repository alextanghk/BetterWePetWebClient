import React from 'react';

interface ProductBlockProps {
    price: number,
    discount?: number,
    likedCount: number,
    liked?: boolean,
    favorite?: boolean,
    onClickFavorite(value: boolean): void,
    onClickLike(value: boolean): void,
    itemName: string,
    itemLink: string,
    itemImage: any,
    providerName: string,
    providerIcon: any,
    providerLink: string,
    currency?: string
}

interface PostBlockProps {
    image: any,
    title: string,
    desc: string,
    link: string
}

export type { PostBlockProps, ProductBlockProps }