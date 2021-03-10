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
    name: 'Adisakshya Chauhan',
    bio: 'Student Developer',
    github: chalk.cyan('https://github.com/adisakshya'),
    twitter: chalk.cyan('https://twitter.com/adisakshya'),
    liveChat: chalk.cyan('https://tidio.com/adisakshya'),
    discord: 'adisakshya#7200',
    npx: 'npx adi',
    labelTwitter: chalk.white.bold('   Twitter:'),
    labelGitHub: chalk.white.bold('    GitHub:'),
    labelLinkedIn: chalk.white.bold('  LinkedIn:'),
    labelChat: chalk.white.bold(' Live Chat:'),
    labelDiscord: chalk.white.bold('   Discord:')
};

const banner = figlet.textSync(data.handle, { verticalLayout: "full" });
const heading = data.name;
const bio = data.bio;
const twitter = `${data.labelTwitter}  ${data.twitter}`;
const github = `${data.labelGitHub}  ${data.github}`;
const linkedin = `${data.labelLinkedIn}  ${data.linkedin}`;
const liveChat = `${data.labelChat}  ${data.liveChat}`;
const discord = `${data.labelDiscord}  ${data.discord}`;

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
                    twitter + '\n' +
                    github + '\n' +
                    liveChat + '\n' +
                    discord + '\n';
    const table = new Table();
    table.push([avatar, { content: output, vAlign: 'center' }]);
    console.log(table.toString());
})();
