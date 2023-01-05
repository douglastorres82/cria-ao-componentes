import React from "react";
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { AbGrupoOpcoes, AbGrupoOpcoesProps } from '../src';

export default {
    title: 'Componentes/AbGrupoOpcoes',
    component: AbGrupoOpcoes
} as ComponentMeta<typeof AbGrupoOpcoes>

const Template: ComponentStory<typeof AbGrupoOpcoes> = (args) => <AbGrupoOpcoes{...args} />

export const Padrao = Template.bind ({})

Padrao.args = {
    opcoes: [
        {
            id: 1,
            titulo: 'e-book',
            corpo: 'R$ 00,00',
            rodape: '.pdf, .epub, .mob'
        },
        {
            id: 2,
            titulo: 'impresso',
            corpo: 'R$ 00,00',
            rodape: '.pdf, .epub, .mob'
        },
        {
            id: 3,
            titulo: 'impresso + e-book',
            corpo: 'R$ 00,00',
            rodape: '.pdf, .epub, .mob'
        }
    ]
} as AbGrupoOpcoesProps