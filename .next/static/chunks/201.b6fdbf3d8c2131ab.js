"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[201],{25201:function(t,r,e){e.r(r),e.d(r,{Edition:function(){return s}});var i=e(18515),n=e(9279);e(54098),e(18991),e(46878),e(20583),e(84194),e(51121),e(32484),e(78435),e(26219),e(61303),e(49242),e(70565),e(13670),e(79120),e(97604),e(8187),e(19362),e(70332),e(54730),e(36250),e(85725),e(38730),e(237),e(65609),e(77208),e(86841),e(49561),e(8455),e(40553),e(26),e(69392),e(25025),e(34161),e(50266),e(98839),e(62555),e(82037),e(64063),e(65815),e(59189),e(40721),e(51375),e(43320);class s extends i.S{constructor(t,r,e){let n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},a=arguments.length>4?arguments[4]:void 0;super(arguments.length>5&&void 0!==arguments[5]?arguments[5]:new i.C(t,r,a,n),e),(0,i._)(this,"abi",void 0),(0,i._)(this,"metadata",void 0),(0,i._)(this,"roles",void 0),(0,i._)(this,"sales",void 0),(0,i._)(this,"platformFees",void 0),(0,i._)(this,"encoder",void 0),(0,i._)(this,"estimator",void 0),(0,i._)(this,"events",void 0),(0,i._)(this,"royalties",void 0),(0,i._)(this,"signature",void 0),(0,i._)(this,"interceptor",void 0),(0,i._)(this,"erc1155",void 0),this.abi=a,this.metadata=new i.a(this.contractWrapper,i.T,this.storage),this.roles=new i.b(this.contractWrapper,s.contractRoles),this.royalties=new i.c(this.contractWrapper,this.metadata),this.sales=new i.d(this.contractWrapper),this.encoder=new i.h(this.contractWrapper),this.estimator=new i.G(this.contractWrapper),this.events=new i.f(this.contractWrapper),this.platformFees=new i.i(this.contractWrapper),this.interceptor=new i.j(this.contractWrapper),this.signature=new i.l(this.contractWrapper,this.storage,this.roles),this.erc1155=new i.E(this.contractWrapper,this.storage)}onNetworkUpdated(t){this.contractWrapper.updateSignerOrProvider(t)}getAddress(){return this.contractWrapper.readContract.address}async getAll(t){return this.erc1155.getAll(t)}async getOwned(t){return this.erc1155.getOwned(t)}async getTotalCount(){return this.erc1155.totalCount()}async isTransferRestricted(){return!(await this.contractWrapper.readContract.hasRole((0,i.k)("transfer"),n.d))}async mint(t){return this.erc1155.mint(t)}async mintTo(t,r){return this.erc1155.mintTo(t,r)}async mintAdditionalSupply(t,r){return this.erc1155.mintAdditionalSupply(t,r)}async mintAdditionalSupplyTo(t,r,e){return this.erc1155.mintAdditionalSupplyTo(t,r,e)}async mintBatch(t){return this.erc1155.mintBatch(t)}async mintBatchTo(t,r){return this.erc1155.mintBatchTo(t,r)}async burn(t,r){return this.erc1155.burn(t,r)}async call(t){for(var r=arguments.length,e=new Array(r>1?r-1:0),i=1;i<r;i++)e[i-1]=arguments[i];return this.contractWrapper.call(t,...e)}}(0,i._)(s,"contractRoles",["admin","minter","transfer"])}}]);