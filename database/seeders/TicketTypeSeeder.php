<?php

namespace Database\Seeders;

use App\Models\TicketType;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class TicketTypeSeeder extends Seeder{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run(){
        DB::table('ticket_types')->truncate();
        TicketType::create([
            'name' => 'Bug',
			'description' => 'Comunicação de Bug',
            'color' => 'DC3545',
            'created_by' => 1
        ]);

        TicketType::create([
            'name' => 'Suporte',
			'description' => 'Solicitação de Suporte',
            'color' => '17A2B8',
            'created_by' => 1
        ]);

        TicketType::create([
            'name' => 'Recurso',
			'description' => 'Solicitação de novo Recurso',
            'color' => '0D6EFD',
            'created_by' => 1
        ]);

        TicketType::create([
            'name' => 'Oportunidade',
			'description' => 'Oportunidades de melhoria',
            'color' => '28A745',
            'created_by' => 1
        ]);

        TicketType::create([
            'name' => 'Conteúdo',
			'description' => 'Solicitação de novo conteúdo',
            'color' => '6C757D',
            'created_by' => 1
        ]);
    }
}
