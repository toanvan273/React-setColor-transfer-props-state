import React, { Component } from 'react';
import './LichVanNien.css'


class Calendar extends Component {
    constructor(){
        super()
        this.getLunarDate = this.getLunarDate.bind(this)
        this.onHandleChange = this.onHandleChange.bind(this)
    }

   

     state = {
        clickSolar: false,
        clickLunar: false,
        solarDay: 1,
        solarMonth: 1,
        solarYear: 2000,
        lunarDay: 1,
        lunarMonth: 1,
        lunarYear: 2000,
        settings : {},
        TK13 : [
            0x226da2, 0x4695d0, 0x3349dc, 0x5849b0, 0x42a4b0, 0x2aaab8, 0x506a50, 0x3ab540, 0x24bb44, 0x48ab6,
            0x3495b0, 0x205372, 0x464970, 0x2e64f9, 0x5454b0, 0x3e6a50, 0x296c57, 0x4c5ac0, 0x36ab60, 0x2386e,
            0x4892e0, 0x30c97c, 0x56c960, 0x40d4a0, 0x2adaa8, 0x4eb550, 0x3a56a0, 0x24adb5, 0x4c25d0, 0x3492e,
            0x1ed2b2, 0x44a950, 0x2ed4d9, 0x52b2a0, 0x3cb550, 0x285757, 0x4e4da0, 0x36a5b0, 0x225574, 0x4852b,
            0x33a93c, 0x566930, 0x406aa0, 0x2aada8, 0x50ab50, 0x3a4b60, 0x24aae4, 0x4aa570, 0x365270, 0x1f526,
            0x42e530, 0x2e6cba, 0x5456a0, 0x3c5b50, 0x294ad6, 0x4e4ae0, 0x38a4e0, 0x20d4d4, 0x46d260, 0x30d53,
            0x56b520, 0x3eb6a0, 0x2b56a9, 0x505570, 0x3c49d0, 0x25a1b5, 0x4aa4b0, 0x34aa50, 0x1eea51, 0x42b52,
            0x2cb5aa, 0x52ab60, 0x3e95b0, 0x284b76, 0x4e4970, 0x3864b0, 0x22b4b3, 0x466a50, 0x306b3b, 0x565ac,
            0x40ab60, 0x2b2ad8, 0x5049e0, 0x3aa4d0, 0x24d4b5, 0x48b250, 0x32b520, 0x1cf522, 0x42b5a0, 0x2c95e,
            0x5295b0, 0x3e49b0, 0x28a576, 0x4ca4b0, 0x36aa50, 0x20ba54, 0x466d40, 0x2ead6c, 0x54ab60, 0x409370
          ],
          TK14 : [
            0x2d49b8, 0x504970, 0x3a64b0, 0x246ca5, 0x48da50, 0x325aa0, 0x1cd6c1, 0x42a6e0, 0x2e92fb, 0x5292e,
            0x3cc960, 0x26d557, 0x4cd4a0, 0x34d550, 0x215553, 0x4656a0, 0x30a6d0, 0x1aa5d1, 0x4092b0, 0x2aa5b,
            0x50a950, 0x38b2a0, 0x23b2a5, 0x48ad50, 0x344da0, 0x1ccba1, 0x42a570, 0x2e52f9, 0x545270, 0x3c693,
            0x266b37, 0x4c6aa0, 0x36ab50, 0x205753, 0x464b60, 0x30a67c, 0x56a2e0, 0x3ed160, 0x28e968, 0x4ed4a,
            0x38daa0, 0x225ea5, 0x4856d0, 0x344ae0, 0x1f85d2, 0x42a2d0, 0x2cd17a, 0x52aa50, 0x3cb520, 0x24d74,
            0x4aada0, 0x3655d0, 0x2253b3, 0x4645b0, 0x30a2b0, 0x1ba2b1, 0x40aa50, 0x28b559, 0x4e6b20, 0x38ad6,
            0x255365, 0x489370, 0x344570, 0x1ea573, 0x4452b0, 0x2c6a6a, 0x50d950, 0x3c5aa0, 0x27aac7, 0x4aa6e,
            0x3652e0, 0x20cae3, 0x46a560, 0x2ed2bb, 0x54d2a0, 0x3ed550, 0x2a5ad9, 0x4e56a0, 0x38a6d0, 0x2455d,
            0x4a52b0, 0x32a8d0, 0x1ce552, 0x42b2a0, 0x2cb56a, 0x50ad50, 0x3c4da0, 0x26a7a6, 0x4ca570, 0x3651b,
            0x21a174, 0x466530, 0x316a9c, 0x545aa0, 0x3eab50, 0x2a2bd9, 0x502b60, 0x38a370, 0x2452e5, 0x48d160
          ],
          TK15 : [
            0x32e4b0, 0x1c7523, 0x40daa0, 0x2d5b4b, 0x5256d0, 0x3c2ae0, 0x26a3d7, 0x4ca2d0, 0x36d150, 0x1ed95,
            0x44b520, 0x2eb69c, 0x54ada0, 0x3e55d0, 0x2b25b9, 0x5045b0, 0x3aa2b0, 0x22aab5, 0x48a950, 0x32b52,
            0x1ceaa1, 0x40ab60, 0x2c55bc, 0x524b70, 0x3e4570, 0x265377, 0x4c52b0, 0x366950, 0x216954, 0x445aa,
            0x2eab5c, 0x54a6e0, 0x404ae0, 0x28a5e8, 0x4ea560, 0x38d2a0, 0x22eaa6, 0x46d550, 0x3256a0, 0x1d95a,
            0x4295d0, 0x2c4afb, 0x5249b0, 0x3ca4d0, 0x26d2d7, 0x4ab2a0, 0x34b550, 0x205d54, 0x462da0, 0x2e95b,
            0x1b1571, 0x4049b0, 0x2aa4f9, 0x4e64b0, 0x386a90, 0x22aea6, 0x486b50, 0x322b60, 0x1caae2, 0x42937,
            0x2f496b, 0x50c960, 0x3ae4d0, 0x266b27, 0x4adaa0, 0x345ad0, 0x2036d3, 0x4626e0, 0x3092e0, 0x18d2d,
            0x3ec950, 0x28d4d9, 0x4eb4a0, 0x36b690, 0x2355a6, 0x4855b0, 0x3425d0, 0x1ca5b2, 0x4292b0, 0x2ca97,
            0x526950, 0x3a74a0, 0x24b5a8, 0x4aab60, 0x3653b0, 0x202b74, 0x462570, 0x3052b0, 0x1ad2b1, 0x3e695,
            0x286ad9, 0x4e5aa0, 0x38ab50, 0x224ed5, 0x484ae0, 0x32a370, 0x1f44e3, 0x40d2a0, 0x2bd94b, 0x50b550
          ],
          TK16 : [
            0x3c56a0, 0x2497a7, 0x4a95d0, 0x364ae0, 0x20a9b4, 0x44a4d0, 0x2ed250, 0x19aaa1, 0x3eb550, 0x2856d,
            0x4e2da0, 0x3895b0, 0x244b75, 0x484970, 0x32a4b0, 0x1cb4b4, 0x426a90, 0x2aad5c, 0x505b50, 0x3c2b6,
            0x2695e8, 0x4a92f0, 0x364970, 0x206964, 0x44d4a0, 0x2cea5c, 0x52d690, 0x3e56d0, 0x2b2b5a, 0x4e26e,
            0x3892e0, 0x22cad6, 0x48c950, 0x30d4a0, 0x1af4a2, 0x40b590, 0x2c56dc, 0x5055b0, 0x3c25d0, 0x2693b,
            0x4c92b0, 0x34a950, 0x1fb155, 0x446ca0, 0x2ead50, 0x192b61, 0x3e4bb0, 0x2a25f9, 0x502570, 0x3852b,
            0x22aaa6, 0x46e950, 0x326aa0, 0x1abaa3, 0x40ab50, 0x2c4b7b, 0x524ae0, 0x3aa570, 0x2652d7, 0x4ad26,
            0x34d950, 0x1e5d55, 0x4456a0, 0x2e96d0, 0x1a55d2, 0x3e4ae0, 0x28a4fa, 0x4ea4d0, 0x38d250, 0x20d69,
            0x46b550, 0x3235a0, 0x1caba2, 0x4095b0, 0x2d49bc, 0x524970, 0x3ca4b0, 0x24b2b8, 0x4a6a50, 0x346d4,
            0x1fab54, 0x442ba0, 0x2e9370, 0x2e52f2, 0x544970, 0x3c64e9, 0x60d4a0, 0x4aea50, 0x373aa6, 0x5a56d,
            0x462b60, 0x3185e3, 0x5692e0, 0x3ec97b, 0x64a950, 0x4ed4a0, 0x38daa8, 0x5cb550, 0x4856b0, 0x342da4
          ],
          TK17 : [
            0x58a5d0, 0x4292d0, 0x2cd2b2, 0x52a950, 0x3cb4d9, 0x606aa0, 0x4aad50, 0x365756, 0x5c4ba0, 0x44a5b,
            0x314573, 0x5652b0, 0x41a94b, 0x62e950, 0x4e6aa0, 0x38ada8, 0x5e9b50, 0x484b60, 0x32aae4, 0x58a4f,
            0x445260, 0x2bd262, 0x50d550, 0x3d5a9a, 0x6256a0, 0x4a96d0, 0x3749d6, 0x5c49e0, 0x46a4d0, 0x2ed4d,
            0x54d250, 0x3ed53b, 0x64b540, 0x4cb5a0, 0x3995a8, 0x5e95b0, 0x4a49b0, 0x32a974, 0x58a4b0, 0x42aa5,
            0x2cea51, 0x506d40, 0x3aadbb, 0x622b60, 0x4c9370, 0x364af6, 0x5c4970, 0x4664b0, 0x3074a3, 0x52da5,
            0x3e6b5b, 0x6456d0, 0x502ae0, 0x3893e7, 0x5e92e0, 0x48c960, 0x33d155, 0x56d4a0, 0x40da50, 0x2d355,
            0x5256a0, 0x3aa6fa, 0x6225d0, 0x4c92d0, 0x36aab6, 0x5aa950, 0x44b4a0, 0x2ebaa4, 0x54ad50, 0x3f55a,
            0x644ba0, 0x4ea5b0, 0x3b5278, 0x5e52b0, 0x486930, 0x327555, 0x586aa0, 0x40ab50, 0x2c5b52, 0x524b6,
            0x3da56a, 0x60a4f0, 0x4c5260, 0x34ea66, 0x5ad530, 0x445aa0, 0x2eb6a3, 0x5496d0, 0x404ae0, 0x28c9d,
            0x4ea4d0, 0x38d2d8, 0x5eb250, 0x46b520, 0x31d545, 0x56ada0, 0x4295d0, 0x2c55b2, 0x5249b0, 0x3ca4f9
          ],
          TK18 : [
            0x62a4b0, 0x4caa50, 0x37b457, 0x5c6b40, 0x46ada0, 0x305b64, 0x569370, 0x424970, 0x2cc971, 0x5064b,
            0x3a6aa8, 0x5eda50, 0x4a5aa0, 0x32aec5, 0x58a6e0, 0x4492f0, 0x3052e2, 0x52c960, 0x3dd49a, 0x62d4a,
            0x4cd550, 0x365b57, 0x5c56a0, 0x46a6d0, 0x3295d4, 0x5692d0, 0x40a95c, 0x2ad4b0, 0x50b2a0, 0x38b5a,
            0x5ead50, 0x4a4da0, 0x34aba4, 0x58a570, 0x4452b0, 0x2eb273, 0x546930, 0x3c6abb, 0x626aa0, 0x4cab5,
            0x394b57, 0x5c4b60, 0x46a570, 0x3252e4, 0x56d160, 0x3ee93c, 0x64d520, 0x4edaa0, 0x3b5b29, 0x5e56d,
            0x4a4ae0, 0x34a5d5, 0x5aa2d0, 0x42d150, 0x2cea52, 0x52b520, 0x3cd6ab, 0x60ada0, 0x4c55d0, 0x384bb,
            0x5e45b0, 0x46a2b0, 0x30d2b4, 0x56aa50, 0x41b52c, 0x646b20, 0x4ead60, 0x3a55e9, 0x609370, 0x4a457,
            0x34a575, 0x5a52b0, 0x446a50, 0x2d5a52, 0x525aa0, 0x3dab4b, 0x62a6e0, 0x4c92e0, 0x36c6e6, 0x5ca56,
            0x46d4a0, 0x2eeaa5, 0x54d550, 0x4056a0, 0x2ad5a1, 0x4ea5d0, 0x3b52d9, 0x6052b0, 0x4aa950, 0x32d55,
            0x58b2a0, 0x42b550, 0x2e6d52, 0x524da0, 0x3da5cb, 0x62a570, 0x4e51b0, 0x36a977, 0x5c6530, 0x466a90
          ],
          TK19 : [
            0x30baa3, 0x56ab50, 0x422ba0, 0x2cab61, 0x52a370, 0x3c51e8, 0x60d160, 0x4ae4b0, 0x376926, 0x58daa0,
            0x445b50, 0x3116d2, 0x562ae0, 0x3ea2e0, 0x28e2d2, 0x4ec950, 0x38d556, 0x5cb520, 0x46b690, 0x325da4,
            0x5855d0, 0x4225d0, 0x2ca5b3, 0x52a2b0, 0x3da8b7, 0x60a950, 0x4ab4a0, 0x35b2a5, 0x5aad50, 0x4455b0,
            0x302b74, 0x562570, 0x4052f9, 0x6452b0, 0x4e6950, 0x386d56, 0x5e5aa0, 0x46ab50, 0x3256d4, 0x584ae0,
            0x42a570, 0x2d4553, 0x50d2a0, 0x3be8a7, 0x60d550, 0x4a5aa0, 0x34ada5, 0x5a95d0, 0x464ae0, 0x2eaab4,
            0x54a4d0, 0x3ed2b8, 0x64b290, 0x4cb550, 0x385757, 0x5e2da0, 0x4895d0, 0x324d75, 0x5849b0, 0x42a4b0,
            0x2da4b3, 0x506a90, 0x3aad98, 0x606b50, 0x4c2b60, 0x359365, 0x5a9370, 0x464970, 0x306964, 0x52e4a0,
            0x3cea6a, 0x62da90, 0x4e5ad0, 0x392ad6, 0x5e2ae0, 0x4892e0, 0x32cad5, 0x56c950, 0x40d4a0, 0x2bd4a3,
            0x50b690, 0x3a57a7, 0x6055b0, 0x4c25d0, 0x3695b5, 0x5a92b0, 0x44a950, 0x2ed954, 0x54b4a0, 0x3cb550,
            0x286b52, 0x4e55b0, 0x3a2776, 0x5e2570, 0x4852b0, 0x32aaa5, 0x56e950, 0x406aa0, 0x2abaa3, 0x50ab50
          ], /* Years 1800-1899 */
          TK20 : [
            0x3c4bd8, 0x624ae0, 0x4ca570, 0x3854d5, 0x5cd260, 0x44d950, 0x315554, 0x5656a0, 0x409ad0, 0x2a55d2,
            0x504ae0, 0x3aa5b6, 0x60a4d0, 0x48d250, 0x33d255, 0x58b540, 0x42d6a0, 0x2cada2, 0x5295b0, 0x3f4977,
            0x644970, 0x4ca4b0, 0x36b4b5, 0x5c6a50, 0x466d40, 0x2fab54, 0x562b60, 0x409570, 0x2c52f2, 0x504970,
            0x3a6566, 0x5ed4a0, 0x48ea50, 0x336a95, 0x585ad0, 0x442b60, 0x2f86e3, 0x5292e0, 0x3dc8d7, 0x62c950,
            0x4cd4a0, 0x35d8a6, 0x5ab550, 0x4656a0, 0x31a5b4, 0x5625d0, 0x4092d0, 0x2ad2b2, 0x50a950, 0x38b557,
            0x5e6ca0, 0x48b550, 0x355355, 0x584da0, 0x42a5b0, 0x2f4573, 0x5452b0, 0x3ca9a8, 0x60e950, 0x4c6aa0,
            0x36aea6, 0x5aab50, 0x464b60, 0x30aae4, 0x56a570, 0x405260, 0x28f263, 0x4ed940, 0x38db47, 0x5cd6a0,
            0x4896d0, 0x344dd5, 0x5a4ad0, 0x42a4d0, 0x2cd4b4, 0x52b250, 0x3cd558, 0x60b540, 0x4ab5a0, 0x3755a6,
            0x5c95b0, 0x4649b0, 0x30a974, 0x56a4b0, 0x40aa50, 0x29aa52, 0x4e6d20, 0x39ad47, 0x5eab60, 0x489370,
            0x344af5, 0x5a4970, 0x4464b0, 0x2c74a3, 0x50ea50, 0x3d6a58, 0x6256a0, 0x4aaad0, 0x3696d5, 0x5c92e0
          ], /* Years 1900-1999 */
          TK21 : [
            0x46c960, 0x2ed954, 0x54d4a0, 0x3eda50, 0x2a7552, 0x4e56a0, 0x38a7a7, 0x5ea5d0, 0x4a92b0, 0x32aab5,
            0x58a950, 0x42b4a0, 0x2cbaa4, 0x50ad50, 0x3c55d9, 0x624ba0, 0x4ca5b0, 0x375176, 0x5c5270, 0x466930,
            0x307934, 0x546aa0, 0x3ead50, 0x2a5b52, 0x504b60, 0x38a6e6, 0x5ea4e0, 0x48d260, 0x32ea65, 0x56d520,
            0x40daa0, 0x2d56a3, 0x5256d0, 0x3c4afb, 0x6249d0, 0x4ca4d0, 0x37d0b6, 0x5ab250, 0x44b520, 0x2edd25,
            0x54b5a0, 0x3e55d0, 0x2a55b2, 0x5049b0, 0x3aa577, 0x5ea4b0, 0x48aa50, 0x33b255, 0x586d20, 0x40ad60,
            0x2d4b63, 0x525370, 0x3e49e8, 0x60c970, 0x4c54b0, 0x3768a6, 0x5ada50, 0x445aa0, 0x2fa6a4, 0x54aad0,
            0x4052e0, 0x28d2e3, 0x4ec950, 0x38d557, 0x5ed4a0, 0x46d950, 0x325d55, 0x5856a0, 0x42a6d0, 0x2c55d4,
            0x5252b0, 0x3ca9b8, 0x62a930, 0x4ab490, 0x34b6a6, 0x5aad50, 0x4655a0, 0x2eab64, 0x54a570, 0x4052b0,
            0x2ab173, 0x4e6930, 0x386b37, 0x5e6aa0, 0x48ad50, 0x332ad5, 0x582b60, 0x42a570, 0x2e52e4, 0x50d160,
            0x3ae958, 0x60d520, 0x4ada90, 0x355aa6, 0x5a56d0, 0x462ae0, 0x30a9d4, 0x54a2d0, 0x3ed150, 0x28e952
          ], /* Years 2000-2099 */
          TK22 : [
            0x4eb520, 0x38d727, 0x5eada0, 0x4a55b0, 0x362db5, 0x5a45b0, 0x44a2b0, 0x2eb2b4, 0x54a950, 0x3cb559,
            0x626b20, 0x4cad50, 0x385766, 0x5c5370, 0x484570, 0x326574, 0x5852b0, 0x406950, 0x2a7953, 0x505aa0,
            0x3baaa7, 0x5ea6d0, 0x4a4ae0, 0x35a2e5, 0x5aa550, 0x42d2a0, 0x2de2a4, 0x52d550, 0x3e5abb, 0x6256a0,
            0x4c96d0, 0x3949b6, 0x5e4ab0, 0x46a8d0, 0x30d4b5, 0x56b290, 0x40b550, 0x2a6d52, 0x504da0, 0x3b9567,
            0x609570, 0x4a49b0, 0x34a975, 0x5a64b0, 0x446a90, 0x2cba94, 0x526b50, 0x3e2b60, 0x28ab61, 0x4c9570,
            0x384ae6, 0x5cd160, 0x46e4a0, 0x2eed25, 0x54da90, 0x405b50, 0x2c36d3, 0x502ae0, 0x3a93d7, 0x6092d0,
            0x4ac950, 0x32d556, 0x58b4a0, 0x42b690, 0x2e5d94, 0x5255b0, 0x3e25fa, 0x6425b0, 0x4e92b0, 0x36aab6,
            0x5c6950, 0x4674a0, 0x31b2a5, 0x54ad50, 0x4055a0, 0x2aab73, 0x522570, 0x3a5377, 0x6052b0, 0x4a6950,
            0x346d56, 0x585aa0, 0x42ab50, 0x2e56d4, 0x544ae0, 0x3ca570, 0x2864d2, 0x4cd260, 0x36eaa6, 0x5ad550,
            0x465aa0, 0x30ada5, 0x5695d0, 0x404ad0, 0x2aa9b3, 0x50a4d0, 0x3ad2b7, 0x5eb250, 0x48b540, 0x33d556
        ], /* Years 2100-2199 */
        CAN : ['Giáp', 'Ất', 'Bính', 'Đinh', 'Mậu', 'Kỷ', 'Canh', 'Tân', 'Nhâm', 'Quý'],
        CHI : ['Tý', 'Sửu', 'Dần', 'Mẹo', 'Thìn', 'Tỵ', 'Ngọ', 'Mùi', 'Thân', 'Dậu', 'Tuất', 'Hợi'],
        TUAN : ['Chủ Nhật', 'Thứ Hai', 'Thứ Ba', 'Thứ Tư', 'Thứ Năm', 'Thứ Sáu', 'Thứ Bảy'],
        GIO_HD : ['110100101100', '001101001011', '110011010010', '101100110100', '001011001101', '010010110011'],
        TIETKHI : ['Xuân phân', 'Thanh minh', 'Cốc vũ', 'Lập hạ', 'Tiểu mãn', 'Mang chủng',
        'Hạ chí', 'Tiểu thử', 'Đại thử', 'Lập thu', 'Xử thử', 'Bạch lộ',
        'Thu phân', 'Hàn lộ', 'Sương giáng', 'Lập đông', 'Tiểu tuyết', 'Đại tuyết',
        'Đông chí', 'Tiểu hàn', 'Đại hàn', 'Lập xuân', 'Vũ thủy', 'Kinh trập'
        ],
        THANG : ['Một', 'Hai', 'Ba', 'Bốn', 'Năm', 'Sáu', 'Bảy', 'Tám', 'Chín', 'Mười', 'Mười một', 'Mười hai'],
        DAYNAMES : [ 'T2', 'T3', 'T4', 'T5', 'T6', 'T7','CN'],
        LE : {
            solar: [
              { d:  1, m:  1, i: 'Tết Dương lịch' },
              { d:  9, m:  1, i: 'Ngày Học sinh - Sinh viên Việt Nam' },
              { d:  3, m:  2, i: 'Ngày thành lập Đảng Cộng sản Việt Nam' },
              { d: 27, m:  2, i: 'Ngày Thầy thuốc Việt Nam' },
              { d:  8, m:  3, i: 'Ngày Quốc tế Phụ nữ' },
              { d:  8, m:  3, i: 'Ngày thành lập Đoàn Thanh niên Cộng sản Hồ Chí Minh' },
              { d: 26, m:  3, i: 'Ngày thành lập Đoàn Thanh niên Cộng sản Hồ Chí Minh' },
              { d: 21, m:  4, i: 'Ngày Sách Việt Nam' },
              { d: 30, m:  4, i: 'Ngày Thống nhất đất nước' },
              { d:  1, m:  5, i: 'Ngày Quốc tế Lao động' },
              { d: 15, m:  5, i: 'Ngày thành lập Đội Thiếu niên Tiền phong Hồ Chí Minh' },
              { d: 19, m:  5, i: 'Ngày sinh của Chủ tịch Hồ Chí Minh' },
              { d:  1, m:  6, i: 'Ngày Quốc tế Thiếu nhi' },
              { d:  5, m:  6, i: 'Ngày Bác Hồ ra đi tìm đường cứu nước' },
              { d: 27, m:  7, i: 'Ngày Thương binh Liệt sĩ' },
              { d: 19, m:  8, i: 'Ngày Cách mạng tháng Tám thành công' },
              { d:  2, m:  9, i: 'Ngày Quốc khánh' },
              { d: 13, m: 10, i: 'Ngày Doanh nhân Việt Nam' },
              { d: 20, m: 10, i: 'Ngày thành lập Hội Phụ nữ Việt Nam' },
              { d: 20, m: 11, i: 'Ngày Nhà giáo Việt Nam' },
              { d: 22, m: 12, i: 'Ngày thành lập Quân đội Nhân dân Việt Nam' },
              { d: 24, m: 12, i: 'Ngày Lễ Giáng Sinh' }
            ],
            lunar: [
              { d:  1, m:  1, i: 'Tết Nguyên Đán' },
              { d: 15, m:  1, i: 'Tết Nguyên tiêu' },
              { d:  3, m:  3, i: 'Tết Hàn thực' },
              { d: 10, m:  3, i: 'Giỗ Tổ Hùng Vương' },
              { d: 15, m:  4, i: 'Lễ Phật Đản' },
              { d:  5, m:  5, i: 'Tết Đoan ngọ' },
              { d: 15, m:  7, i: 'Vu Lan' },
              { d: 15, m:  8, i: 'Tết Trung thu' },
              { d: 23, m: 12, i: 'Ông Táo chầu trời' }
            ]
        },
        today: new Date(),
        month : (new Date().getMonth()+1),
        year : (new Date().getFullYear()),
        solar : {
            day : [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31],
            month : [1,2,3,4,5,6,7,8,9,10,11,12],
            year : [1930, 1931, 1932, 1933, 1934, 1935, 1936, 1937, 1938, 1939, 1940, 1941, 1942, 1943, 1944, 1945, 1946, 1947, 1948, 1949, 1950, 1951, 1952, 1953, 1954, 1955, 1956, 1957, 1958, 1959, 1960, 1961, 1962, 1963, 1964, 1965, 1966, 1967, 1968, 1969, 1970, 1971, 1972, 1973, 1974, 1975, 1976, 1977, 1978, 1979, 1980, 1981, 1982, 1983, 1984, 1985, 1986, 1987, 1988, 1989, 1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029,2030, 2031, 2032, 2033, 2034, 2035, 2036, 2037, 2038, 2039, 2040, 2041, 2042, 2043, 2044, 2045, 2046, 2047, 2048, 2049, 2050, 2051, 2052, 2053, 2054, 2055, 2056, 2057, 2058, 2059, 2060, 2061, 2062, 2063, 2064, 2065, 2066, 2067, 2068, 2069, 2070, 2071, 2072, 2073, 2074, 2075, 2076, 2077, 2078, 2079, 2080, 2081, 2082, 2083, 2084, 2085, 2086, 2087, 2088, 2089, 2090, 2091, 2092, 2093, 2094, 2095, 2096, 2097, 2098, 2099, 2100, 2101, 2102, 2103, 2104, 2105, 2106, 2107, 2108, 2109, 2110, 2111, 2112, 2113, 2114, 2115, 2116, 2117, 2118, 2119, 2120, 2121, 2122, 2123, 2124, 2125, 2126, 2127, 2128,2129, 2130, 2131, 2132, 2133, 2134, 2135, 2136, 2137, 2138, 2139, 2140, 2141, 2142, 2143, 2144, 2145, 2146, 2147, 2148, 2149, 2150, 2151, 2152, 2153, 2154, 2155, 2156, 2157, 2158, 2159, 2160, 2161, 2162, 2163, 2164, 2165, 2166, 2167, 2168, 2169, 2170, 2171, 2172, 2173, 2174, 2175, 2176, 2177, 2178, 2179, 2180, 2181, 2182, 2183, 2184, 2185, 2186, 2187, 2188, 2189, 2190, 2191, 2192, 2193, 2194, 2195, 2196, 2197, 2198, 2199]
        },
        lunar : {
            day : [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31],
            month : [1,2,3,4,5,6,7,8,9,10,11,12],
            year : [1930, 1931, 1932, 1933, 1934, 1935, 1936, 1937, 1938, 1939, 1940, 1941, 1942, 1943, 1944, 1945, 1946, 1947, 1948, 1949, 1950, 1951, 1952, 1953, 1954, 1955, 1956, 1957, 1958, 1959, 1960, 1961, 1962, 1963, 1964, 1965, 1966, 1967, 1968, 1969, 1970, 1971, 1972, 1973, 1974, 1975, 1976, 1977, 1978, 1979, 1980, 1981, 1982, 1983, 1984, 1985, 1986, 1987, 1988, 1989, 1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029,2030, 2031, 2032, 2033, 2034, 2035, 2036, 2037, 2038, 2039, 2040, 2041, 2042, 2043, 2044, 2045, 2046, 2047, 2048, 2049, 2050, 2051, 2052, 2053, 2054, 2055, 2056, 2057, 2058, 2059, 2060, 2061, 2062, 2063, 2064, 2065, 2066, 2067, 2068, 2069, 2070, 2071, 2072, 2073, 2074, 2075, 2076, 2077, 2078, 2079, 2080, 2081, 2082, 2083, 2084, 2085, 2086, 2087, 2088, 2089, 2090, 2091, 2092, 2093, 2094, 2095, 2096, 2097, 2098, 2099, 2100, 2101, 2102, 2103, 2104, 2105, 2106, 2107, 2108, 2109, 2110, 2111, 2112, 2113, 2114, 2115, 2116, 2117, 2118, 2119, 2120, 2121, 2122, 2123, 2124, 2125, 2126, 2127, 2128,2129, 2130, 2131, 2132, 2133, 2134, 2135, 2136, 2137, 2138, 2139, 2140, 2141, 2142, 2143, 2144, 2145, 2146, 2147, 2148, 2149, 2150, 2151, 2152, 2153, 2154, 2155, 2156, 2157, 2158, 2159, 2160, 2161, 2162, 2163, 2164, 2165, 2166, 2167, 2168, 2169, 2170, 2171, 2172, 2173, 2174, 2175, 2176, 2177, 2178, 2179, 2180, 2181, 2182, 2183, 2184, 2185, 2186, 2187, 2188, 2189, 2190, 2191, 2192, 2193, 2194, 2195, 2196, 2197, 2198, 2199]
        },
        
    }

    FIRST_DAY = this.jdn(31, 1, 1200) 
    LAST_DAY = this.jdn(31, 12, 2199)
    PI = Math.PI
    today = new Date()
    currentLunarDate = this.getLunarDate(this.today.getDate(), this.today.getMonth()+1, this.today.getFullYear())
    currentMonth = this.today.getMonth()+1
    currentYear = this.today.getFullYear();

    LunarDate(dd, mm, yy, leap, jd) {
        this.day = dd;
        this.month = mm;
        this.year = yy;
        this.leap = leap;
        this.jd = jd;
        // console.log(jd);
        
    }
    INT(d) {
        return Math.floor(d);
      }
    
    jdn(dd, mm, yy) {
        var a = this.INT((14 - mm) / 12);
        var y = yy+4800-a;
        var m = mm+12*a-3;
        var jd = dd + this.INT((153*m+2)/5) + 365*y + this.INT(y/4) - this.INT(y/100) + this.INT(y/400) - 32045;
        return jd;
        //return 367*yy - INT(7*(yy+INT((mm+9)/12))/4) - INT(3*(INT((yy+(mm-9)/7)/100)+1)/4) + INT(275*mm/9)+dd+1721029;
    }

    decodeLunarYear(yy, k) {
        var monthLengths, regularMonths, offsetOfTet, leapMonth, leapMonthLength, solarNY, currentJD, j, mm;
        var ly = [];
        monthLengths = [29, 30];
        regularMonths = new Array(12);
        offsetOfTet = k >> 17;
        leapMonth = k & 0xf;
        // console.log(leapMonth);
        
        leapMonthLength = monthLengths[k >> 16 & 0x1];
        solarNY = this.jdn(1, 1, yy);
        currentJD = solarNY+offsetOfTet;
        // console.log(currentJD);
        
        j = k >> 4;
        
        for(let i = 0; i < 12; i++) {
          regularMonths[12 - i - 1] = monthLengths[j & 0x1];
          j >>= 1;
        }
        // console.log(regularMonths);
        
        if (leapMonth === 0) {
          for(mm = 1; mm <= 12; mm++) {
              
            ly.push(new this.LunarDate(1, mm, yy, 0, currentJD));
            currentJD += regularMonths[mm-1];
            // console.log(ly);
          }
        } else {
          for(mm = 1; mm <= leapMonth; mm++) {
            ly.push(new this.LunarDate(1, mm, yy, 0, currentJD));
            currentJD += regularMonths[mm-1];
          }
          ly.push(new this.LunarDate(1, leapMonth, yy, 1, currentJD));
          currentJD += leapMonthLength;
          for(mm = leapMonth+1; mm <= 12; mm++) {
            ly.push(new this.LunarDate(1, mm, yy, 0, currentJD));
            currentJD += regularMonths[mm-1];
          }
        }
        
        
        return ly; // mảng 12 obj là 12 tháng âm
      }
      //==============================================================================================================================================
    convertLunar2Solar(lunarDay, lunarMonth, lunarYear, lunarLeap, timeZone) {
        var k, a11, b11, off, leapOff, leapMonth, monthStart;
        if (lunarMonth < 11) {
            a11 = this.getLunarMonth11(lunarYear-1, timeZone);
            b11 = this.getLunarMonth11(lunarYear, timeZone);
        } else {
            a11 = this.getLunarMonth11(lunarYear, timeZone);
            b11 = this.getLunarMonth11(lunarYear+1, timeZone);
        }
        k = this.INT(0.5 + (a11 - 2415021.076998695) / 29.530588853);
        off = lunarMonth - 11;
        if (off < 0) {
            off += 12;
        }
        if (b11 - a11 > 365) {
            leapOff = this.getLeapMonthOffset(a11, timeZone);
            leapMonth = leapOff - 2;
            if (leapMonth < 0) {
                leapMonth += 12;
            }
            if (lunarLeap != 0 && lunarMonth != leapMonth) {
                return new Array(0, 0, 0);
            } else if (lunarLeap != 0 || off >= leapOff) {
                off += 1;
            }
        }
        monthStart = this.getNewMoonDay(k+off, timeZone);
        return this.jdToDate(monthStart+lunarDay-1);
    }
     jdFromDate(dd, mm, yy) {
        var a, y, m, jd;
        a = this.INT((14 - mm) / 12);
        y = yy+4800-a;
        m = mm+12*a-3;
        jd = dd + this.INT((153*m+2)/5) + 365*y + this.INT(y/4) - this.INT(y/100) + this.INT(y/400) - 32045;
        if (jd < 2299161) {
            jd = dd + this.INT((153*m+2)/5) + 365*y + this.INT(y/4) - 32083;
        }
        return jd;
    }
    
    /* Convert a Julian day number to day/month/year. Parameter jd is an integer */
     jdToDate(jd) {
        var a, b, c, d, e, m, day, month, year;
        if (jd > 2299160) { // After 5/10/1582, Gregorian calendar
            a = jd + 32044;
            b = this.INT((4*a+3)/146097);
            c = a - this.INT((b*146097)/4);
        } else {
            b = 0;
            c = jd + 32082;
        }
        d = this.INT((4*c+3)/1461);
        e = c - this.INT((1461*d)/4);
        m = this.INT((5*e+2)/153);
        day = e - this.INT((153*m+2)/5) + 1;
        month = m + 3 - 12*(this.INT(m/10));
        year = b*100 + d - 4800 + this.INT(m/10);
        return new Array(day, month, year);
    }
    
    /* Compute the time of the k-th new moon after the new moon of 1/1/1900 13:52 UCT 
     * (measured as the number of days since 1/1/4713 BC noon UCT, e.g., 2451545.125 is 1/1/2000 15:00 UTC).
     * Returns a floating number, e.g., 2415079.9758617813 for k=2 or 2414961.935157746 for k=-2
     * Algorithm from: "Astronomical Algorithms" by Jean Meeus, 1998
     */
     NewMoon(k) {
        var T, T2, T3, dr, Jd1, M, Mpr, F, C1, deltat, JdNew;
        T = k/1236.85; // Time in Julian centuries from 1900 January 0.5
        T2 = T * T;
        T3 = T2 * T;
        dr = this.PI/180;
        Jd1 = 2415020.75933 + 29.53058868*k + 0.0001178*T2 - 0.000000155*T3;
        Jd1 = Jd1 + 0.00033*Math.sin((166.56 + 132.87*T - 0.009173*T2)*dr); // Mean new moon
        M = 359.2242 + 29.10535608*k - 0.0000333*T2 - 0.00000347*T3; // Sun's mean anomaly
        Mpr = 306.0253 + 385.81691806*k + 0.0107306*T2 + 0.00001236*T3; // Moon's mean anomaly
        F = 21.2964 + 390.67050646*k - 0.0016528*T2 - 0.00000239*T3; // Moon's argument of latitude
        C1=(0.1734 - 0.000393*T)*Math.sin(M*dr) + 0.0021*Math.sin(2*dr*M);
        C1 = C1 - 0.4068*Math.sin(Mpr*dr) + 0.0161*Math.sin(dr*2*Mpr);
        C1 = C1 - 0.0004*Math.sin(dr*3*Mpr);
        C1 = C1 + 0.0104*Math.sin(dr*2*F) - 0.0051*Math.sin(dr*(M+Mpr));
        C1 = C1 - 0.0074*Math.sin(dr*(M-Mpr)) + 0.0004*Math.sin(dr*(2*F+M));
        C1 = C1 - 0.0004*Math.sin(dr*(2*F-M)) - 0.0006*Math.sin(dr*(2*F+Mpr));
        C1 = C1 + 0.0010*Math.sin(dr*(2*F-Mpr)) + 0.0005*Math.sin(dr*(2*Mpr+M));
        if (T < -11) {
            deltat= 0.001 + 0.000839*T + 0.0002261*T2 - 0.00000845*T3 - 0.000000081*T*T3;
        } else {
            deltat= -0.000278 + 0.000265*T + 0.000262*T2;
        };
        JdNew = Jd1 + C1 - deltat;
        return JdNew;
    }
    
    /* Compute the longitude of the sun at any time. 
     * Parameter: floating number jdn, the number of days since 1/1/4713 BC noon
     * Algorithm from: "Astronomical Algorithms" by Jean Meeus, 1998
     */
     SunLongitude(jdn) {
        var T, T2, dr, M, L0, DL, L;
        T = (jdn - 2451545.0 ) / 36525; // Time in Julian centuries from 2000-01-01 12:00:00 GMT
        T2 = T*T;
        dr = this.PI/180; // degree to radian
        M = 357.52910 + 35999.05030*T - 0.0001559*T2 - 0.00000048*T*T2; // mean anomaly, degree
        L0 = 280.46645 + 36000.76983*T + 0.0003032*T2; // mean longitude, degree
        DL = (1.914600 - 0.004817*T - 0.000014*T2)*Math.sin(dr*M);
        DL = DL + (0.019993 - 0.000101*T)*Math.sin(dr*2*M) + 0.000290*Math.sin(dr*3*M);
        L = L0 + DL; // true longitude, degree
        L = L*dr;
        L = L - this.PI*2*(this.INT(L/(this.PI*2))); // Normalize to (0, 2*PI)
        return L;
    }
    
    /* Compute sun position at midnight of the day with the given Julian day number. 
     * The time zone if the time difference between local time and UTC: 7.0 for UTC+7:00.
     * The function returns a number between 0 and 11. 
     * From the day after March equinox and the 1st major term after March equinox, 0 is returned. 
     * After that, return 1, 2, 3 ... 
     */
     getSunLongitudeWeb(dayNumber, timeZone) {
        return this.INT(this.SunLongitude(dayNumber - 0.5 - timeZone/24)/this.PI*6);
    }
    
    /* Compute the day of the k-th new moon in the given time zone.
     * The time zone if the time difference between local time and UTC: 7.0 for UTC+7:00
     */
     getNewMoonDay(k, timeZone) {
        return this.INT(this.NewMoon(k) + 0.5 + timeZone/24);
    }
    
    /* Find the day that starts the luner month 11 of the given year for the given time zone */
     getLunarMonth11(yy, timeZone) {
        var k, off, nm, sunLong;
        //off = jdFromDate(31, 12, yy) - 2415021.076998695;
        off = this.jdFromDate(31, 12, yy) - 2415021;
        k = this.INT(off / 29.530588853);
        nm = this.getNewMoonDay(k, timeZone);
        sunLong = this.getSunLongitudeWeb(nm, timeZone); // sun longitude at local midnight
        if (sunLong >= 9) {
            nm = this.getNewMoonDay(k-1, timeZone);
        }
        return nm;
    }
    
    /* Find the index of the leap month after the month starting on the day a11. */
     getLeapMonthOffset(a11, timeZone) {
        var k, last, arc, i;
        k = this.INT((a11 - 2415021.076998695) / 29.530588853 + 0.5);
        last = 0;
        i = 1; // We start with the month following lunar month 11
        arc = this.getSunLongitudeWeb(this.getNewMoonDay(k+i, timeZone), timeZone);
        do {
            last = arc;
            i++;
            arc = this.getSunLongitudeWeb(this.getNewMoonDay(k+i, timeZone), timeZone);
        } while (arc != last && i < 14);
        return i-1;
    }
    
    /* Comvert solar date dd/mm/yyyy to the corresponding lunar date */
     convertSolar2Lunar(dd, mm, yy, timeZone) {
        var k, dayNumber, monthStart, a11, b11, lunarDay, lunarMonth, lunarYear, lunarLeap;
        dayNumber = this.jdFromDate(dd, mm, yy);
        k = this.INT((dayNumber - 2415021.076998695) / 29.530588853);
        monthStart = this.getNewMoonDay(k+1, timeZone);
        if (monthStart > dayNumber) {
            monthStart = this.getNewMoonDay(k, timeZone);
        }
        //alert(dayNumber+" -> "+monthStart);
        a11 = this.getLunarMonth11(yy, timeZone);
        b11 = a11;
        if (a11 >= monthStart) {
            lunarYear = yy;
            a11 = this.getLunarMonth11(yy-1, timeZone);
        } else {
            lunarYear = yy+1;
            b11 = this.getLunarMonth11(yy+1, timeZone);
        }
        lunarDay = dayNumber-monthStart+1;
        let diff = this.INT((monthStart - a11)/29);
        lunarLeap = 0;
        lunarMonth = diff+11;
        if (b11 - a11 > 365) {
            let leapMonthDiff = this.getLeapMonthOffset(a11, timeZone);
            if (diff >= leapMonthDiff) {
                lunarMonth = diff + 10;
                if (diff == leapMonthDiff) {
                    lunarLeap = 1;
                }
            }
        }
        if (lunarMonth > 12) {
            lunarMonth = lunarMonth - 12;
        }
        if (lunarMonth >= 11 && diff < 4) {
            lunarYear -= 1;
        }
        return new Array(lunarDay, lunarMonth, lunarYear, lunarLeap);
    }
    
    //============================================================================================================================================

   



    findLunarDate(jd, ly) {
        if (jd > this.LAST_DAY || jd < this.FIRST_DAY || ly[0].jd > jd) {
          return new this.LunarDate(0, 0, 0, 0, jd);
        }
        var i = ly.length-1;
        while (jd < ly[i].jd) {
          i--;
        }
        var off = jd - ly[i].jd;
        let ret = new this.LunarDate(ly[i].day+off, ly[i].month, ly[i].year, ly[i].leap, jd);
        // console.log(ret);
        return ret;
    }

    getYearInfo(yyyy) {
        let yearCode;
        if (yyyy < 1300) {
          yearCode = this.state.TK13[yyyy - 1200];
        } else if (yyyy < 1400) {
          yearCode = this.state.TK14[yyyy - 1300];
        } else if (yyyy < 1500) {
          yearCode = this.state.TK15[yyyy - 1400];
        } else if (yyyy < 1600) {
          yearCode = this.state.TK16[yyyy - 1500];
        } else if (yyyy < 1700) {
          yearCode = this.state.TK17[yyyy - 1600];
        } else if (yyyy < 1800) {
          yearCode = this.state.TK18[yyyy - 1700];
        } else if (yyyy < 1900) {
          yearCode = this.state.TK19[yyyy - 1800];
        } else if (yyyy < 2000) {
          yearCode = this.state.TK20[yyyy - 1900];
        } else if (yyyy < 2100) {
          yearCode = this.state.TK21[yyyy - 2000];
        } else {
          yearCode = this.state.TK22[yyyy - 2100];
        }
        return this.decodeLunarYear(yyyy, yearCode);
    }

    

    getMonth(mm, yy) {
        var ly1, ly2, tet1, jd1, jd2, mm1, yy1, result, i;
        if (mm < 12) {
          mm1 = mm + 1;
          yy1 = yy;
        } else {
          mm1 = 1;
          yy1 = yy + 1;
        }
        jd1 = this.jdn(1, mm, yy);
        jd2 = this.jdn(1, mm1, yy1);
        ly1 = this.getYearInfo(yy);
        tet1 = ly1[0].jd;
        result = [];
        if (tet1 <= jd1) { /* tet(yy) = tet1 < jd1 < jd2 <= 1.1.(yy+1) < tet(yy+1) */
          for (i = jd1; i < jd2; i++) {
            result.push(this.findLunarDate(i, ly1));
          }
        } else if (jd1 < tet1 && jd2 < tet1) { /* tet(yy-1) < jd1 < jd2 < tet1 = tet(yy) */
          ly1 = this.getYearInfo(yy - 1);
          for (i = jd1; i < jd2; i++) {
            result.push(this.findLunarDate(i, ly1));
          }
        } else if (jd1 < tet1 && tet1 <= jd2) { /* tet(yy-1) < jd1 < tet1 <= jd2 < tet(yy+1) */
          ly2 = this.getYearInfo(yy - 1);
          for (i = jd1; i < tet1; i++) {
            result.push(this.findLunarDate(i, ly2));
          }
          for (i = tet1; i < jd2; i++) {
            result.push(this.findLunarDate(i, ly1));
          }
        }
        return result;
      }
    
    getDayName(lunarDate) {
        if (lunarDate.day == 0) {
          return "";
        }
        var cc = this.getCanChi(lunarDate);
        var s = "Ngày " + cc[0] +", tháng "+cc[1] + ", năm " + cc[2];
        return s;
    }
    
     getYearCanChi(year) {
        return this.state.CAN[(year+6) % 10] + " " + this.state.CHI[(year+8) % 12];
      }
    
     getCanChi(lunar) {
        var dayName, monthName, yearName;
        dayName = this.state.CAN[(lunar.jd + 9) % 10] + " " + this.state.CHI[(lunar.jd+1)%12];
        monthName = this.state.CAN[(lunar.year*12+lunar.month+3) % 10] + " " + this.state.CHI[(lunar.month+1)%12];
        if (lunar.leap == 1) {
          monthName += " (N)";
        }
        yearName = this.getYearCanChi(lunar.year);
        return [dayName, monthName, yearName];
    }

    getDayString(lunar, solarDay, solarMonth, solarYear) {
        var s;
        var dayOfWeek = this.state.TUAN[(lunar.jd + 1) % 7];
        s = dayOfWeek + " " + solarDay + "/" + solarMonth + "/" + solarYear;
        s += " (";
        s = s + "Ngày " + lunar.day+" tháng "+lunar.month;
        if (lunar.leap == 1) {
          s = s + " nhuận";
        }
        return s;
      }
    
    getTodayString() {
        var s = this.getDayString(this.currentLunarDate, this.today.getDate(), this.today.getMonth()+1, this.today.getFullYear());
        s += " năm " + this.getYearCanChi(this.currentLunarDate.year) + ')';
        return s;
      }
    
    getPhatLich(ld, lm, ly) {
        ld = (ld == null ? this.currentLunarDate.day : ld);
        lm = (lm == null ? this.currentLunarDate.month : lm);
        ly = (ly == null ? this.currentLunarDate.year : ly);
        return ( lm > 4 || (lm >= 4 && ld >= 15) ? ly + 544 : (ly + 544) - 1);
    }

    getDateString(dd, MM, yyyy) {
        var InputLunarDate = this.getLunarDate(dd, MM, yyyy);
        var s;
        var dayOfWeek = this.state.TUAN[(InputLunarDate.jd + 1) % 7];
        s = dayOfWeek + ", " + dd + "/" + MM + "/" + yyyy;
        s += " (";
        s = s + InputLunarDate.day+"/"+InputLunarDate.month;
        if (InputLunarDate.leap == 1) {
          s = s + "N";
        }
        s += "/" + this.getYearCanChi(InputLunarDate.year) + ")";
        return s;
    }
    
    getCurrentTime() {
        let today = new Date();
        var Std = today.getHours();
        var Min = today.getMinutes();
        var Sec = today.getSeconds();
        var s1  = ((Std < 10) ? "0" + Std : Std);
        var s2  = ((Min < 10) ? "0" + Min : Min);
        var s3  = ((Sec < 10) ? "0" + Sec : Sec);
        return s1 + ":" + s2 + ":" + s3;
        // return s1 + ":" + s2;
    }
    
    getGioHoangDao(jd) {
        var chiOfDay = (jd+1) % 12;
        var gioHD = this.state.GIO_HD[chiOfDay % 6]; // same values for Ty' (1) and Ngo. (6), for Suu and Mui etc.
        var ret = "";
        var count = 0;
        for (var i = 0; i < 12; i++) {
            if (gioHD.charAt(i) == '1') {
            ret += this.state.CHI[i];
            ret += ' ('+(i*2+23)%24+'-'+(i*2+1)%24+')';
            if (count++ < 5) ret += ', ';
            if (count == 3) ret += '\n';
            }
        }
        return ret;
    }

    SunLongitude(jdn) {
        //  console.log('jdn',jdn)
        var T, T2, dr, M, L0, DL, lambda, theta, omega;
        T = (jdn - 2451545.0) / 36525; // Time in Julian centuries from 2000-01-01 12:00:00 GMT
        T2 = T * T;
        dr = this.PI / 180; // degree to radian
        M = 357.52910 + 35999.05030 * T - 0.0001559 * T2 - 0.00000048 * T * T2; // mean anomaly, degree
        L0 = 280.46645 + 36000.76983 * T + 0.0003032 * T2; // mean longitude, degree
        DL = (1.914600 - 0.004817 * T - 0.000014 * T2) * Math.sin(dr * M);
        DL = DL + (0.019993 - 0.000101 * T) * Math.sin(dr * 2 * M) + 0.000290 * Math.sin(dr * 3 * M);
        theta = L0 + DL; // true longitude, degree
        // obtain apparent longitude by correcting for nutation and aberration
        omega = 125.04 - 1934.136 * T;
        lambda = theta - 0.00569 - 0.00478 * Math.sin(omega * dr);
        // Convert to radians
        lambda = lambda * dr;
        lambda = lambda - this.PI * 2 * (this.INT(lambda / (this.PI * 2))); // Normalize to (0, 2*PI)
        return lambda;
        }

    getSunLongitude(dayNumber, timeZone) {
        return this.INT(this.SunLongitude(dayNumber - 0.5 - timeZone / 24.0) / this.PI * 12);
    }

    getCanHour0(jdn) {
        return this.state.CAN[(jdn - 1) * 2 % 10];
    }

    // printMonth(mm, yy) {
    //     var res = "";
    //     res += this.printTable(mm, yy);
    //     return res;
    // }

    // printYear(yy) {
    //     var yearName = "Năm " + this.getYearCanChi(yy) + " " + yy;
    //     var res = "";
    //     res += '<table align="center">\n';
    //     res += '<tbody>\n';
    //     res += '<tr>\n';
    //     res += '  <td colspan="3" class="amlich-tennam" onClick="showYearSelect();">'+yearName+'</td>\n';
    //     res += '</tr>\n';
    //     for (var i = 1; i<= 12; i++) {
    //       if (i % 3 == 1) res += '<tr>\n';
    //       res += '<td>\n';
    //       res += this.printTable(i, yy);
    //       res += '</td>\n';
    //       if (i % 3 == 0) res += '</tr>\n';
    //     }
    //     res += '</tbody>\n';
    //     res += '</table>\n';
    //     return res;
    //   }
    
    //  printTable(mm, yy) {
    //     var i, j, k, solar, lunar, cellClass, solarClass, lunarClass;
    //     var currentMonth = this.getMonth(mm, yy);
    //     if (currentMonth.length == 0) return false;
    //     var ld1 = currentMonth[0];
    //     var emptyCells = (ld1.jd + 1) % 7;
    //     var MonthHead = mm + "/" + yy;
    //     var LunarHead = this.getYearCanChi(ld1.year);
    //     var res = "";
    //     res += '<table class="amlich" border="0" cellpadding="0" cellspacing="0" width="'+this.state.settings.tableWidth+'">\n';
    //     res += '<tbody>\n';
    //     res += this.printHead(mm, yy);
    //     for (i = 0; i < 6; i++) {
    //       res += '<tr>\n';
    //       for (j = 0; j < 7; j++) {
    //         k = 7 * i + j;
    //         if (k < emptyCells || k >= emptyCells + currentMonth.length) {
    //           res += '<td class="ngaythang">\n';
    //           res += '  <div class="cn">&nbsp;</div>\n';
    //           res += '  <div class="am">&nbsp;</div>\n';
    //           res += '</td>\n';
    //         } else {
    //           solar = k - emptyCells + 1;
    //           ld1 = currentMonth[k - emptyCells];
    //           res += this.printCell(ld1, solar, mm, yy);
    //         }
    //       }
    //       res += '</tr>\n';
    //     }
    //     res += '</tbody>\n';
    //     res += '</table>\n';
    //     return res;
    // }

    // getPrevMonthLink(mm, yy) {
    //     var mm1 = mm > 1 ? mm-1 : 12;
    //     var yy1 = mm > 1 ? yy : yy-1;
    //     return '<a class="prev-month" data-yy="'+yy1+'" data-mm="'+mm1+'" href="#">&nbsp;&lsaquo;&nbsp;</a>';
    //   }
    
    // getNextMonthLink(mm, yy) {
    //     var mm1 = mm < 12 ? mm+1 : 1;
    //     var yy1 = mm < 12 ? yy : yy+1;
    //     return '<a class="next-month" data-yy="'+yy1+'" data-mm="'+mm1+'" href="#">&nbsp;&rsaquo;&nbsp;</a>';
    //   }
    
    // getPrevYearLink(mm, yy) {
    //     return '<a class="prev-year" data-yy="'+(yy-1)+'" data-mm="'+mm+'" href="#">&lsaquo;&lsaquo;</a>';
    //   }
    
    // getNextYearLink(mm, yy) {
    //     return '<a class="next-year" data-yy="'+(yy+1)+'" data-mm="'+mm+'" href="#">&rsaquo;&rsaquo;</a>';
    // }

    // printHead(mm, yy) {
    //     var res = "";
    //     var monthName = mm+"/"+yy;
    //     var cc = this.getCanChi(this.currentLunarDate),
    //     holiday = this.getHolodayString( this.today.getDate(), (this.today.getMonth()+1), this.currentLunarDate.day, this.currentLunarDate.month );
    //         res += '<tr>\n';
    //         res += '  <td colspan="7">\n';
    //         res += '    <table class="calendar" border="0" cellpadding="4" cellspacing="0" width="100%">\n';
    //         res += '      <tbody>\n';
    //         res += '        <tr>\n';
    //         res += '          <td colspan="2" class="calendar-month">Tháng '+(this.today.getMonth()+1)+' Năm '+this.today.getFullYear()+'</td>\n';
    //         res += '        </tr>\n';
    //         res += '        <tr>\n';
    //         res += '          <td colspan="2" class="calendar-day">\n';
    //         res += '            <span class="day-num">'+this.today.getDate()+'</span><br>\n';
    //         res += '            <span class="day-tuan">'+this.state.TUAN[(this.currentLunarDate.jd + 1) % 7]+'</span>\n';
    //         res += '          </td>\n';
    //         res += '        </tr>\n';
    //         res += '        <tr>\n';
    //         res += '          <td width="50%" class="calendar-b-left" valign="top">\n';
    //         res += '            <span class="lunar-month-name">Tháng '+this.state.THANG[this.currentLunarDate.month-1]+'</span><br>\n';
    //         res += '            <span class="lunar-day-num">'+this.currentLunarDate.day+'</span><br>\n';
    //         res += '            <span class="lunar-year-name"><strong>'+cc[2]+'</strong></span>\n';
    //         res += '          </td>\n';
    //         res += '          <td width="50%" class="calendar-b-right" valign="top">\n';
    //         res += '            <span>Ngày <strong>'+cc[0]+'</strong></span><br>\n';
    //         res += '            <span>Tháng <strong>'+cc[1]+'</strong></span><br>\n';
    //         res += '            <span>Giờ đầu <strong>'+(this.getCanHour0(this.currentLunarDate.jd)+' '+this.state.CHI[0])+'</strong></span><br>\n';
    //         res += '            <span>Tiết <strong>'+this.state.TIETKHI[this.getSunLongitude(this.currentLunarDate.jd + 1, 7.0)]+'</strong></span><br>\n';
    //         res += '            <span>PL: <strong>'+this.getPhatLich()+'</strong></span>\n';
    //         res += '          </td>\n';
    //         res += '        </tr>\n';
    //         res += '        <tr class="calendar-holiday">'+(holiday!='' ? '<td colspan="2">'+holiday+'</td>' : '')+'</tr>\n';
    //         res += '        <tr>\n';
    //         res += '          <td colspan="2" class="calendar-hoangdao">Giờ hoàng đạo: '+this.getGioHoangDao(this.currentLunarDate.jd)+'</td>\n';
    //         res += '        </tr>\n';
    //         res += '      </tbody>\n';
    //         res += '    </table>\n';
    //         res += '  </td>\n';
    //         res += '</tr>\n';
    //         res += '<tr>\n';
    //         res += '  <td colspan="2" class="navi-l">'+this.getPrevYearLink(mm, yy)+' &nbsp;'+this.getPrevMonthLink(mm, yy)+'</td>\n';
    //         res += '  <td colspan="3" class="tenthang">'+monthName+'</td>\n';
    //         res += '  <td colspan="2" class="navi-r">'+this.getNextMonthLink(mm, yy)+' &nbsp;'+this.getNextYearLink(mm, yy)+'</td></tr>\n';
    //         res += '</tr>\n';
           
    //     for(var i=0;i<=6;i++) {
    //       res += '  <td class="ngaytuan">'+this.state.DAYNAMES[i]+'</td>\n';
    //     }
    //     res += '</tr>\n';
    //     return res;
    // }

     checkHolidaySolar( dd, mm ) {
        var res = '';
        this.state.LE.solar.forEach(  function( k, item ) {
          if ( item.d == dd && item.m == mm ) {
            res = item.i+' ('+item.d+'/'+item.m+' DL)';
            return false;
          }
        });
        
        return res;
      }
    
       checkHolidayLunar( dd, mm ) {
        var res = '';
        this.state.LE.lunar.forEach(  function( k, item ) {
          if ( item.d == dd && item.m == mm ) {
            res = item.i+' ('+item.d+'/'+item.m+' ÂL)';
            return false;
          }
        });
        return res;
      }
    
       getHolodayString( sd, sm, ld, lm ) {
        var tmp = this.checkHolidayLunar( ld, lm ),
            res = '';
        if ( tmp != '' ) {
          res = tmp;
        }
        tmp = this.checkHolidaySolar( sd, sm );
        if ( tmp != '' ) {
          res = ( res == '' ? tmp : res+', '+tmp);
        }
        return res;
    }
    getLunarDate(dd, mm, yyyy) {
        var ly, jd;
        if (yyyy < 1300 || 2199 < yyyy) {
          return this.LunarDate(0, 0, 0, 0, 0);
        }
        ly = this.getYearInfo(yyyy); // Mảng có 12 obj miêu tả 12 tháng âm
        jd = this.jdn(dd, mm, yyyy); // một số dạng jd: 2458599
        if (jd < ly[0].jd) {
          ly = this.getYearInfo(yyyy - 1);
        }
        if (jd > this.LAST_DAY || jd < this.FIRST_DAY || ly[0].jd > jd) {
            return new this.LunarDate(0, 0, 0, 0, jd);
        }
          var i = ly.length-1; // 11
          while (jd < ly[i].jd) {
            i--;
          }
          var off = jd - ly[i].jd;
          let ret = new this.LunarDate(ly[i].day+off, ly[i].month, ly[i].year, ly[i].leap, jd);
          // console.log(ret);
          return ret;
    }
  
    inputEmplyCellsBefore(emptyCell,mm,yy){
        const solarsDay = []
        const lunarsDay = []
        const days = []
        let lunars, solars
        let mS,yS 
        if(mm > 1){
            mS = mm - 1
            yS = yy
        }else{
            mS = 12
            yS = yy - 1
        }
        let A_Lunars = this.getMonth(mS,yS)
        let length_lunars = A_Lunars.length
        var monthStart = new Date(yS, mS - 1, 1); 
        var monthEnd = new Date(yS, mS, 1); 
        var monthLength = (monthEnd - monthStart)/(1000 * 60 * 60 * 24) 
        for (let i = 1; i <= monthLength; i++){
            solarsDay.push(i)
        }

        if(emptyCell == 0){
             lunars = A_Lunars.slice(length_lunars - 6, length_lunars)  // Mảng có số ngày Âm theo emptyCell
             solars = solarsDay.slice(monthLength - 6, monthLength) // Mảng có số ngày Dương theo emptyCell
        }else{
            lunars = A_Lunars.slice(length_lunars - emptyCell + 1, length_lunars)  // Mảng có số ngày Âm theo emptyCell
            solars = solarsDay.slice(monthLength - emptyCell + 1, monthLength) // Mảng có số ngày Dương theo emptyCell
        }
        lunars.map(e => {
            lunarsDay.push(
              e.day  
            )
        })
        // console.log('Before-Solar',solars,'Before-Lunar',lunars,'emptyCell', emptyCell )
        if(emptyCell == 0){
            for(let i = 0; i < 6; i++){
                days.push(
                <td key={i} className="ngaythang">
                    <div className="t2t6"> { solars[i]} </div>
                    <div className="am"> { lunarsDay[i] } </div>
                </td>
                )
            }
        }else{
            for(let i = 0; i < emptyCell - 1; i++){
                days.push(
                <td key={i} className="ngaythang">
                    <div className="t2t6"> { solars[i]} </div>
                    <div className="am"> { lunarsDay[i] } </div>
                </td>
                )
               
            }
        }

        return days
    }
    inputEmplyCellsAfter(mm,yy){
        const solarsDay = []
        const lunars = []
        const solars = []
        const days = []
        var monthStart = new Date(yy, mm - 1, 1); 
        var monthEnd = new Date(yy, mm, 1); 
        var monthLength = (monthEnd - monthStart)/(1000 * 60 * 60 * 24) 
        let dayFinish = new Date(yy,mm - 1, monthLength)
        let i =  dayFinish.getDay() // i từ 1 2 3 4 5 6 0 - thứ tự T2 T3 ... T7 CN
        let x = 7 - i
        let mS,yS
        if(mm < 12){
            mS = mm + 1
            yS = yy
        }else{
            mS = 1
            yS = yy + 1
        }
        let lunarsDay = this.getMonth(mS,yS) // mảng 1 tháng ngày ÂM
        var monthStartNext = new Date(yS, mS - 1, 1); 
        var monthEndNext = new Date(yS, mS, 1); 
        var monthLengthNext = (monthEndNext - monthStartNext)/(1000 * 60 * 60 * 24) 
        for(let i = 1; i <= monthLengthNext; i++){
            solarsDay.push(i) // Mảng 1 tháng ngày dương
        }
        for (let i = 0; i < x; i++){
            solars.push(
                solarsDay[i]
            )
            lunars.push(
                lunarsDay[i].day
            )
        }
        if(x == 7){
            return null
        }else{
            for(let i = 0; i < x; i++){
                days.push(
                <td key={i} className="ngaythang">
                    <div className="t2t6"> { solars[i] } </div>
                    <div className="am"> { lunars[i] } </div>
                </td>
                )
            }
        }
        // console.log('days',days , 'x:',x)
        return days
    }


    renderTable () {
      const {month,year} = this.state
      let days = []
      let mm = month
      let yy = year
      let daysLunarMonth = this.getMonth(mm,yy)
      let ld1 = daysLunarMonth[0]
      let emptyCells = (ld1.jd + 1) % 7 // 1
      let LS =  this.inputEmplyCellsBefore(emptyCells,mm,yy) 
      days = days.concat(LS) // mảng có số phần tử là/theo emptyCells
        
      for(let i = 0; i < daysLunarMonth.length; i++){
        let solar = i + 1
        ld1 = daysLunarMonth[i]
        days.push(
            this.renderCell(ld1, solar , mm, yy)
        )
      }
      let LS2 = this.inputEmplyCellsAfter(mm,yy)
      days = days.concat(LS2)
      let rows = []
      let cells = []
      days.forEach((row,i) =>{
        if (((i) % 7) !== 0) {
          cells.push(row);
      } else {
          let insertRow = cells.slice();
          rows.push(insertRow);
          cells = [];
          cells.push(row);
      }
      if (i === days.length - 1) {
          let insertRow = cells.slice();
          rows.push(insertRow);
      }
      })

        let trElems = rows.map((d, i) => {
          return (
              <tr key={i*100}>
                  {d}
              </tr>
          );
      })
    //   console.log('trElems',trElems, 'days', days);
      return trElems
    }
    
    renderCell(lunarDate, solarDate, solarMonth, solarYear){
      let today = new Date()
      let days = {}
      
      var cellClass, solarClass, lunarClass, solarColor,
        cellClass = "ngaythang",
        solarClass = "t2t6",
        lunarClass = "am",
        title = '',
        tmp = '',
        dow = (lunarDate.jd + 1) % 7;
        if (dow == 0) {
          solarClass = "cn";
          solarColor = "red";
        } else if (dow == 6) {
          solarClass = "t7";
          solarColor = "green";
        }
        if (solarDate == today.getDate() && solarMonth == today.getMonth()+1 && solarYear == today.getFullYear()) {
          cellClass = "homnay";
        }
        tmp = this.checkHolidayLunar( lunarDate.day, lunarDate.month);
        
        if ( tmp != '' ) {
          cellClass = 'leam';
          title = tmp;
        }
        tmp = this.checkHolidaySolar( solarDate, solarMonth);
        if ( tmp != '' ) {
          cellClass = 'leduong';
          title = ( title == '' ? tmp : title+', '+tmp);
        }
        title = ( title == '' ? this.getDayName(lunarDate) : title );
        if (lunarDate.day == 1 && lunarDate.month == 1) {
          cellClass = "tet";
        }
        if (lunarDate.leap == 1) {
          lunarClass = "am2";
        }
        let lunar = lunarDate.day; // tất cả ngày âm trong tháng
        if (solarDate == 1 || lunar == 1) {
          lunar = lunarDate.day + '/' + lunarDate.month ;
        }
        var args = lunarDate.day + "," + lunarDate.month + "," + lunarDate.year + "," + lunarDate.leap;
        args += "," + lunarDate.jd + "," + solarDate + "," + solarMonth + "," + solarYear;
        Object.assign(days, <td className={cellClass} title={title} data-args={args} >
          <div className={solarClass}>{solarDate}</div>
          <div className={lunarClass}> {lunar} </div>
        </td>)
      return days
    }
    renderDaysName(){
      let daysName = this.state.DAYNAMES
     return daysName.map(e =>{
        return(
          <td key={e} className="ngaytuan">
              {e}
          </td>
        )
      })
      
    }
    renderHeader(){
      const {month,year} = this.state
      let mm = month
      let yy = year
      return(
        <tr>
          <td colSpan="1" className="navi-l">
            <div className="icon" onClick={this.prevMonth}>
              <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
            </div>
          </td>
          <td colSpan="5" className="tenthang">
          Lịch vạn niên tháng {mm} năm {yy}
          </td>
          <td colSpan="1" className="navi-r">
            <div className="icon" onClick={this.nextMonth}>
              <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
            </div>
          </td>
        </tr>
      )
    }
    nextMonth = () => {
      let X = this.state.month
      // console.log('X',X)
      if(X < 12){
        this.setState({
          month: this.state.month + 1
        })
      }else(
        this.setState({
          month: 1,
          year: this.state.year + 1
        })
      )
      
    }
    prevMonth = () => {
      let Y = this.state.month
      if(Y > 1){
        this.setState({
          month: this.state.month - 1
        })
      }else(
        this.setState({
          month: 12,
          year: this.state.year - 1
        })
      )           
    }
    onHandleChange = (event) => {
        let target = event.target
        let name = target.name
        let value = target.value;
        if(this.state.clickSolar){
            this.setState({
                [name]: value
               },()=>{
                let dS = parseInt(this.state.solarDay)
                let mS = parseInt(this.state.solarMonth)
                let yS = parseInt(this.state.solarYear)
                let Lunar = this.getLunarDate(dS,mS,yS)
                // ====================================
                this.setState({
                    lunarDay: Lunar.day,
                    lunarMonth: Lunar.month,
                    lunarYear: Lunar.year
                })
               })
        }else (
            this.setState({
                [name]:value
            },function(){
                let dL = parseInt(this.state.lunarDay)
                let mL = parseInt(this.state.lunarMonth)
                let yL = parseInt(this.state.lunarYear)
                let getYearInfo = this.getYearInfo(yL) 
                let leap = getYearInfo[mL - 1].leap
                let Solar = this.convertLunar2Solar(dL,mL,yL,leap,7.0)
                this.setState({
                    solarDay: Solar[0],
                    solarMonth: Solar[1],
                    solarYear: Solar[2]
                })
                
            })
        )
     
        
       
        // let dL = parseInt(this.state.lunarDay)
        // let mL = parseInt(this.state.lunarMonth)
        // let yL = parseInt(this.state.lunarYear)
        // let getYearInfo = this.getYearInfo(yL) 
        // let leap = getYearInfo[mL - 1].leap
        // let Solar = this.convertLunar2Solar(dL,mL,yL,leap,7.0)
        // this.setState({
        //     // lunarDay:  parseInt(value),
        //     // lunarMonth: parseInt(value),
        //     // lunarYear: parseInt(value),
        //     solarDay: Solar[0],
        //     solarMonth: Solar[1],
        //     solarYear: Solar[2]
        // })
    }
    setClickSolar = () => {
        this.setState({
            clickSolar: true,
            clickLunar: false
        })
        
    }
    setClickLunar = () => {
        this.setState({
            clickSolar: false,
            clickLunar: true
        })
    }
    onHandleSubmit(value){
        value.preventDefault()
    }
    render() {
        let dS = this.state.solarDay
        let mS = this.state.solarMonth
        let yS = this.state.solarYear
        const today = new Date()
        const currentSolarday = today.getDate() // 25
        const currenSolarmonth = today.getMonth() + 1 // 4
        const currenSolartyear = today.getFullYear() // 2019
        
        const currentHour = today.getHours()
        const jdn = this.jdn(currentSolarday,currenSolarmonth,currenSolartyear) // một số dạng jd: 2458599
        const decodeLunarYear = this.decodeLunarYear(2000, ) // Mảng có 12 obj miêu tả 12 tháng âm
        const jdFromDate = this.jdFromDate(1,1,2019) // trả về dạng jd: 2458485
        const getYearInfo = this.getYearInfo(2017) // Mảng có 12 obj miêu tả 12 tháng âm
        const lunarDate = this.getLunarDate(25,4,2018) // {day: 10, month: 3, year: 2018, leap: 0, jd: 2458234}
        const leap = getYearInfo[6].leap
        const getSolar = this.convertLunar2Solar(10,7,2017,leap,7.0)
        const daysLunarMonth = this.getMonth(currenSolarmonth, currenSolartyear ) //Mảng có 29 or 30 p.tử LunarD theo tháng dương
        const dayName = this.getDayName( lunarDate) //  Ngày Canh Dần, tháng Mậu Thìn, năm Kỷ Hợi
        const yearCanChi = this.getYearCanChi( currenSolartyear) // Kỷ Hợi
        const CanChi =  this.getCanChi(lunarDate)   // ["Canh Dần", "Mậu Thìn", "Kỷ Hợi"]
        const TodayString = this.getTodayString() // Thứ Ba 23/4/2019 (Ngày 19 tháng 3 năm Kỷ Hợi)
        const PL = this.getPhatLich(lunarDate, currenSolarmonth ,currenSolartyear) // Phật Lịch: 2562
        const DateString = this.getDateString(currentSolarday, currenSolarmonth ,currenSolartyear) // Thứ Ba, 23/4/2019 (19/3/Kỷ Hợi)
        const CurrentTime = this.getCurrentTime() // 17:08:14
        const GioHoangDao = this.getGioHoangDao(lunarDate.jd) // Tý (23-1), Sửu (1-3), Thìn (7-9), Tỵ (9-11), Mùi (13-15), Tuất (19-21)
        const CanHour0 = this.getCanHour0(lunarDate.jd) // Bính
        // let p = this.inputEmplyCellsAfter(currenSolarmonth,currenSolartyear)
        // console.log('ÂM ',p);
        // console.log('getSolar',getSolar);
        // let dL = parseInt(this.state.lunarDay)
        // let mL = parseInt(this.state.lunarMonth)
        // let yL = parseInt(this.state.lunarYear)
        // console.log('render_Lunar',dL,mL,yL);
        // console.log('render_Solar',dS,mS,yS);
        // console.log('clickSolar',this.state.clickSolar);
        // console.log('clickLunar',this.state.clickLunar);
        
        const {lunar,solar} = this.props
        return (
           <>
            <table className="amlich">
              <thead>
                {this.renderHeader()}
              </thead>
              <tbody>
                <tr>
                  {this.renderDaysName()}
                </tr>
                {this.renderTable()}
                <tr>
                    {/* {this.inputEmplyCellsBefore(6)} */}
                </tr>
              </tbody>
            </table>
            <div className="change-calender">
                    <div className="title">
                    Đổi lịch âm dương
                    </div>
                    <form className="form-change" onSubmit={this.onHandleSubmit}>
                        <div className="left">
                            <div className="list-group">
                                <label>Dương lịch</label>
                                <div className="list-select plus-calender" onClick={this.setClickSolar}>
                                    <select name="solarDay" className="day" value={this.state.solarDay} onChange={this.onHandleChange}>
                                        {this.state.solar.day.map(e => {
                                                return (
                                                    <option key={e} value={e}>{e}</option>
                                                )
                                        })}
                                        
                                    </select>
                                    <select name="solarMonth" className="month" value={this.state.solarMonth}  onChange={this.onHandleChange}>
                                        {this.state.solar.month.map(e => {
                                                return(
                                                    <option key={e} value={e}>{e}</option>
                                                )
                                        })}
                                     
                                    </select>
                                    <select name="solarYear" className="year" value={this.state.solarYear} onChange={this.onHandleChange}>
                                        {this.state.solar.year.map(e => {
                                                return (
                                                    <option key={e} value={e}>{e}</option>
                                                )
                                        })}
                                       
                                    </select>
                                </div>
                                
                            </div>

                            <div className="list-group">
                                <label>Âm lịch</label>
                                <div className="list-select minus-calender" onClick={this.setClickLunar}>
                                    <select name="lunarDay" className="day" value={this.state.lunarDay} onChange={this.onHandleChange}>
                                    {this.state.lunar.day.map(e => {
                                        return (
                                            <option key={e} value={e}>{e}</option>
                                        )
                                    })}
                                    </select>
                                    <select name="lunarMonth" className="month" value={this.state.lunarMonth} onChange={this.onHandleChange}>
                                    {this.state.lunar.month.map(e => {
                                        return (
                                            <option key={e} value={e}>{e}</option>
                                        )
                                    })}
                                    </select>
                                    <select name="lunarYear" className="year" value={this.state.lunarYear}  onChange={this.onHandleChange}>
                                    {this.state.lunar.year.map(e => {
                                        return (
                                            <option key={e} value={e}>{e}</option>
                                        )
                                    })}
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div className="right">
                            <input type="submit" className="detail" value="Submit" />
                        </div>
                    </form>
                </div>
            </>
        );
    }
}

export default Calendar;