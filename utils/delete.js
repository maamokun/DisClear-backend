const { REST, Routes } = require('discord.js');

export function remove(token, clientId, res) {

const rest = new REST().setToken(token);

rest.put(Routes.applicationCommands(clientId), { body: [] })
    .then(() => res.json({ status: 'success' }))
    .catch(error =>
        res.status(500).json({ status: 'error', message: error })
        );
}