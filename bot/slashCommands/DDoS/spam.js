const {
    MessageEmbed
} = require('discord.js');
const ayarlar = require('../../ayarlar.json');
var version = ayarlar['versionbot1'];
var roleID5 = ayarlar['roleID5'];
var img = ayarlar['img'];
var photovip4 = ayarlar['photovip4'];
var randomgif = photovip4[Math['floor']((Math['random']() * photovip4['length']))];
module['exports'] = {
    name: 'spam',
    description: 'Spam Sms Siu Cấp vip pro',
    type: 'CHAT_INPUT',
    cooldown: 60,
    options: [{
        name: 'version',
        description: 'vui lòng chọn phiên bản',
        required: true,
        type: 'STRING',
        choices: [{
            name: `${'SMS-V2'}`,
            value: `${'SMS-V2'}`,
            inline: true
            }, {
            name: `${'SMS-V1'}`,
            value: `${'SMS-V1'}`,
            inline: true
        }]
    }, {
        name: 'phone',
        description: 'Nhập số điện thoại spam',
        required: true,
        type: 'STRING'
    }, {
        name: 'threads',
        description: 'Nhập số lượng spam',
        required: true,
        type: 'STRING'
      }],
    run: async(_0xf396x7, _0xf396x8) => {
        if (!_0xf396x8['member']['roles']['cache']['has'](roleID5)) {
            return _0xf396x8['reply']({
                embeds: [new MessageEmbed()['setColor']('RANDOM')['setDescription'](`${'Ch\u1EC9 c\xF3 <@&'}${roleID5}${'> m\u1EDBi \u0111\u01B0\u1EE3c d\xF9ng l\u1EC7nh n\xE0y.'}`)['setFooter']({
                    text: '\xA9 Developer: NguyenTuan'
                })['setTimestamp']()]
            })
        };
        const _0xf396x9 = _0xf396x8['options']['getString']('version');
        const _0xf396xa = _0xf396x8['options']['getString']('phone');
        const _0xf396x0 = _0xf396x8['options']['getString']('threads');
        if (_0xf396x9 === 'SMS-V2') {
            var _0xf396xb = _0xf396x9;
            var _0xf396xc = require('child_process')['exec'];
            _0xf396xc(`${'python methods/L7/'}${_0xf396xb}${'.py '}${_0xf396xa}${' 100'}`, (_0xf396xd, _0xf396xe, _0xf396xf) => {});
            console['log']('M\u1ED9t cu\u1ED9c t\u1EA5n c\xF4ng kh\u1EDFi ch\u1EA1y ID Discord:' + _0xf396x8['guild']['id']);
            const _0xf396x10 = new MessageEmbed()['setColor']('RANDOM')['setTitle'](version)['addFields']({
                name: '**`👤 User:`**',
                value: `${' [ '}${_0xf396x8['user']['username']}${' ] '}`,
                inline: true
            }, {
                name: '**`📱 Phone:`**',
                value: `${' [ '}${_0xf396xa}${' ] '}`,
                inline: true
            }, {
                name: '**`🌐 Version:`**',
                value: `${' [ '}${_0xf396x9}${' ] '}`,
                inline: true
            }, {
                name: '**`💠 Threads:`**',
                value: `${' [ '}${_0xf396x0}${' ] '}`,
                inline: true
            }, {               
                name: '**`🏷 Plan:`**',
                value: `${' [ FREE | SMS ☢️ ] '}`,
                inline: true
            }, {
                name: '**`☯️ Bot:`**',
                value: `${' [ NguyenTuan ] '}`,
                inline: true
            }, {      
                name: '**`👑 Admin:`**',
                value: `${' [ Nguyễn Hùng Tuấn ] '}`,
                inline: true
            })['setImage'](randomgif)['setFooter']('\xA9 Developer: NguyenTuan', img)['setTimestamp']();
            const _0xf396x11 = new MessageEmbed()['setColor']('RANDOM')['setTitle'](version)['setDescription']('LOADING...')['setImage']('https://media.discordapp.net/attachments/1058386925469323366/1073984441342496798/67b2a9ba5e85822f237caae92111e938.gif')['setFooter']('\xA9 Developer: NguyenTuan', img)['setTimestamp']();
            _0xf396x8['reply']({
                embeds: [_0xf396x11]
            })['then']((_0xf396x12) => {
                setTimeout(function () {
                    _0xf396x8['editReply']({
                        embeds: [_0xf396x10]
                    })
                }, 3000)
            })
        }
         if (_0xf396x9 === 'SMS-V1') {
            var _0xf396xb = _0xf396x9;
            var _0xf396xc = require('child_process')['exec'];
            _0xf396xc(`${'python methods/L7/'}${_0xf396xb}${'.py '}${_0xf396xa}${' 100'}`, (_0xf396xd, _0xf396xe, _0xf396xf) => {});
            console['log']('M\u1ED9t cu\u1ED9c t\u1EA5n c\xF4ng kh\u1EDFi ch\u1EA1y ID Discord:' + _0xf396x8['guild']['id']);
            const _0xf396x10 = new MessageEmbed()['setColor']('RANDOM')['setTitle'](version)['addFields']({
                name: '**`👤 User:`**',
                value: `${' [ '}${_0xf396x8['user']['username']}${' ] '}`,
                inline: true
            }, {
                name: '**`📱 Phone:`**',
                value: `${' [ '}${_0xf396xa}${' ] '}`,
                inline: true
            }, {
                name: '**`🌐 Version:`**',
                value: `${' [ '}${_0xf396x9}${' ] '}`,
                inline: true
            }, {
                name: '**`💠 Threads:`**',
                value: `${' [ '}${_0xf396x0}${' ] '}`,
                inline: true
            }, {               
                name: '**`🏷 Plan:`**',
                value: `${' [ FREE | SMS ☢️ ] '}`,
                inline: true
            }, {
                name: '**`☯️ Bot:`**',
                value: `${' [ NguyenTuan ] '}`,
                inline: true
            }, {      
                name: '**`👑 Admin:`**',
                value: `${' [ Nguyễn Hùng Tuấn ] '}`,
                inline: true
            })['setImage'](randomgif)['setFooter']('\xA9 Developer: NguyenTuan', img)['setTimestamp']();
            const _0xf396x11 = new MessageEmbed()['setColor']('RANDOM')['setTitle'](version)['setDescription']('LOADING...')['setImage']('https://media.discordapp.net/attachments/1058386925469323366/1073984441342496798/67b2a9ba5e85822f237caae92111e938.gif')['setFooter']('\xA9 Developer: NguyenTuan', img)['setTimestamp']();
            _0xf396x8['reply']({
                embeds: [_0xf396x11]
            })['then']((_0xf396x12) => {
                setTimeout(function () {
                    _0xf396x8['editReply']({
                        embeds: [_0xf396x10]
                    })
                }, 3000)
            })
         }
    }
}