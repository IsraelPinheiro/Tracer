<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCommentsTable extends Migration{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up(){
        Schema::create('comments', function (Blueprint $table){
            $table->id();
            $table->string('commentable_type');
            $table->bigInteger('commentable_id')->unsigned();
            $table->text('comment')->nullable()->default(null);
            $table->boolean('private')->default(true);
            $table->timestamps();   //created_at and updated_at
            $table->softDeletes();  //deleted_at
            $table->bigInteger('created_by')->unsigned();
            $table->bigInteger('updated_by')->unsigned()->nullable()->default(null);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down(){
        Schema::dropIfExists('comments');
    }
}
