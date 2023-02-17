interface FundCardDetailModel {
    state: string;
    caption: string;
}

export interface FundCardModel {
    image: string;
    title: string
    funds: FundCardDetailModel[];
}
