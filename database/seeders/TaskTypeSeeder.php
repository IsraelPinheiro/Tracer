<?php

namespace Database\Seeders;

use App\Models\TaskType;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class TaskTypeSeeder extends Seeder{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run(){
        DB::table('task_types')->truncate();
        TaskType::create([
            'name' => 'Bug',
			'description' => 'Tarefa relacionada a correção de bugs',
            'color' => 'FF99FF',
            'created_by' => 1
        ]);

        TaskType::create([
            'name' => 'Recurso',
			'description' => 'Tarefa relacionada a criação de novos recursos',
            'color' => 'FF99FF',
            'created_by' => 1
        ]);

        TaskType::create([
            'name' => 'Conteúdo',
			'description' => 'Tarefa relacionada a criação de novo conteúdo',
            'color' => 'FF99FF',
            'created_by' => 1
        ]);
    }
}
