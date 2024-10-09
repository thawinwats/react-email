import {
  Body,
  Container,
  Img,
  Text,
  Heading,
} from "@react-email/components";
import * as React from "react";

import Layout from "../components/layout";

export const OrbixWelcomeEmail = () => (
  <Layout>
    <>
      <Img
        src={`https://gallery.eomail8.com/aead3efe-e5bb-11e9-be00-06b4694bee2a%2Fmedia-manager%2F1726217892460-Weekly%20price%2013-9-67%201.jpg`}
        width="600"
        alt="orbix"
        className="my-4"
      />

      <Container>
        <Heading as="h1" className="text-lg">Top 5 Weekly Price | 13/9/2024 - 13.30 PM</Heading>
        <Text className="font-bold">อัปเดตราคาประจำสัปดาห์</Text>

        <Heading as="h3" className="text-base uppercase">Top Gainers</Heading>
        <ol className="list-decimal list-outside">
          <li>JFIN - ฿ 7.40 | + 52.03%</li>
          <li>ICP - ฿ 277.78 | + 15.43%</li>
          <li>NEAR - ฿ 139.61 | + 13.28%</li>
          <li>TON - ฿ 183.90 | + 12.36%</li>
          <li>AVAX - ฿ 792.11 | + 9.92%</li>
        </ol>

        <Heading as="h3" className="text-base uppercase">Top Losers</Heading>
        <ol className="list-decimal list-outside">
          <li>LTC - ฿ 2,093.28 | - 4.48%</li>
          <li>ETH - ฿ 78,172.90 | - 1.78%</li>
          <li>TUSD - ฿ 33.27 | - 0.58%</li>
          <li>USDC - ฿ 33.34 | - 0.56%</li>
          <li>DAI - ฿ 33.34 | - 0.55%</li>
        </ol>

        <Text>
          *หน่วยราคา = บาท
        </Text>
        <Text>
          อ้างอิง: coinmarketcap.com (13/9/2024 | 13:30 น.)
        </Text>
        <Text>
          คริปโทเคอร์เรนซีและโทเคนดิจิทัลมีความเสี่ยงสูง ท่านอาจสูญเสียเงินลงทุนได้ทั้งจํานวน โปรดศึกษาและลงทุนให้เหมาะสมกับระดับความเสี่ยงที่ยอมรับได้
        </Text>
      </Container>
    </>
  </Layout>
)


export default OrbixWelcomeEmail