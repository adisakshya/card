#!/usr/bin/env node

const asciify = require('asciify-image');
const chalk = require('chalk')
const figlet = require('figlet');
const path = require('path');
const Table = require('cli-table3');

/**
 * Content of digitial card
 */
const data = {
    handle: 'adisakshya',
    name: chalk.white.bold('Adisakshya Chauhan'),
    bio: chalk.gray('Student Developer'),
    github: chalk.gray('https://github.com/') + chalk.cyanBright('adisakshya'),
    twitter: chalk.gray('https://twitter.com/') + chalk.cyanBright('adisakshya'),
    linkedin: chalk.gray('https://linkedin.com/in/') + chalk.cyanBright('adisakshya'),
    liveChat: chalk.gray('https://tidio.com/') + chalk.cyanBright('adisakshya'),
    web: chalk.gray('https://') + chalk.cyanBright('adisakshya.github.io'),
    discord: chalk.cyanBright('adisakshya#7200'),
    npx: chalk.cyanBright('npx adisakshya'),
    labelTwitter: chalk.white.bold('   Twitter:'),
    labelGitHub: chalk.white.bold('    GitHub:'),
    labelLinkedIn: chalk.white.bold('  LinkedIn:'),
    labelChat: chalk.white.bold(' Live Chat:'),
    labelWeb: chalk.white.bold('       Web:'),
    labelDiscord: chalk.white.bold('   Discord:'),
    labelCard: chalk.white.bold('   Card:')
};

const banner = figlet.textSync(data.handle, { verticalLayout: 'full' });
const heading = data.name;
const bio = data.bio;
const twitter = `${data.labelTwitter}  ${data.twitter}`;
const github = `${data.labelGitHub}  ${data.github}`;
const linkedin = `${data.labelLinkedIn}  ${data.linkedin}`;
const liveChat = `${data.labelChat}  ${data.liveChat}`;
const discord = `${data.labelDiscord}  ${data.discord}`;
const card = `${data.labelCard}  ${data.npx}`;
const web = `${data.labelWeb}  ${data.web}`;

/**
 * Options for the avatar image
 */
const avatarImageOptions = {
    fit: 'box',
    width: '22',
    height: '22'
};
const avatarImagePath = path.join(__dirname, 'assets/avatar.jpg');

(async () => {
    const avatar = await asciify(avatarImagePath, avatarImageOptions);
    const output =  banner + '\n' + '\n' +
                    heading + '\n' +
                    bio + '\n' + '\n' +
                    github + '\n' +
                    twitter + '\n' +
                    linkedin + '\n' +
                    web + '\n' +
                    discord + '\n';
    const table = new Table();
    table.push([
        { rowSpan: 2, content: avatar},
        { content: output, vAlign: 'center' }
    ],[
        { content: card, hAlign: 'right', vAlign: 'center'}
    ]);
    console.log(table.toString());
})();
