import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { MensagemView } from "../views/mensagem-view.js";
import { NegociacoesView } from "../views/negociacoes-view.js";
export class NegociacaoController {
    constructor() {
        this._negociacoes = new Negociacoes();
        this._negociacoes_view = new NegociacoesView('#negociacoesView');
        this._mensagem_view = new MensagemView('#mensagemView');
        this._input_data = document.querySelector('#data');
        this._input_quantidade = document.querySelector('#quantidade');
        this._input_valor = document.querySelector('#valor');
        this._negociacoes_view.update(this._negociacoes);
    }
    adiciona() {
        const negociacao = this._criaNegociacao();
        this._negociacoes.adiciona(negociacao);
        this._negociacoes_view.update(this._negociacoes);
        this._mensagem_view.update('Negociação adicionada com sucesso!');
        this._limparFormulario();
        this._input_data.focus();
    }
    _criaNegociacao() {
        const exp = /-/g, date = new Date(this._input_data.value.replace(exp, ',')), quantidade = parseInt(this._input_quantidade.value), valor = parseFloat(this._input_valor.value);
        return new Negociacao(date, quantidade, valor);
    }
    _limparFormulario() {
        this._input_data.value = '';
        this._input_quantidade.value = '';
        this._input_valor.value = '';
    }
}
