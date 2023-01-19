import { $ } from "../core/dom";
import { Page } from "@core/Page.js";
import { createRecordsTable } from './dashboard.functions'

export class DashboardPage extends Page {
    getRoot() {
        const now = Date.now().toString()
        return $.create('div', 'db').html(
            `
        <div class="db__header">
            <h2>Панель Управления</h2>
        </div>
        <div class="db__new">
        <div class="db__new-view">
        <a href="#excel/${now}" class="db__new-create">
            Новая <br />таблица 
    </a>
    </div>
        </div>
        <div class="db__table">
            ${createRecordsTable()}
        </div>
        `)
    }
}